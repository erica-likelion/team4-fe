import { ImageUpload } from "../components/ImageUpload";
import StoreInfo from "../components/StoreInfo";
import * as S from "../styles/pages/Create.styles";
import { useEffect, useState } from "react";
import HashTag from "../components/HashTag";
import GPTResult from "../components/GPTResult";
import axios from "axios";

export function Create() {
  const [tagList, setTagList] = useState<string[]>([]);
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
  const [request, setRequest] = useState<string>("");
  const [mdTitle, setMdTitle] = useState<string>("");
  const [mdContent, setMdContent] = useState<string>("");

  // File -> base64 변환 함수
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // base64url 변환
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const fetchData = async () => {
    try {
      // 모든 파일을 base64로 변환
      const base64Images = await Promise.all(
        images.map((img) => fileToBase64(img.file))
      );

      const response = await axios.post(
        "http://3.34.142.160:8080/api/made/upload-images",
        {
          storeId: 1,
          userInput: request + "마크다운 형식으로 뽑아줘",
          hashTag: tagList.join(","),
          detailRequest: request + "마크다운 형식으로 뽑아줘",
          images: [],
        }
      );
      setMdTitle(response.data.resultTitle);
      setMdContent(response.data.resultContent);
    } catch (err) {
      console.error("업로드 실패:", err);
    }
  };

  return (
    <S.CreateContainer>
      <S.LeftContainer>
        <S.LeftWrap>
          <StoreInfo />
          <ImageUpload images={images} setImages={setImages} />
          <HashTag tagList={tagList} setTagList={setTagList} />
          <S.RequestBox>
            <S.RequestTitle>상세 요청</S.RequestTitle>
            <S.RequestInput
              value={request}
              placeholder={
                "원하는 문체나 강조할 표현이 있다면 알려주세요.\n예: “부드러운 말투”, “정확한 시간 정보 강조”, “공감가는 문장”, “해시태그 추가”"
              }
              onChange={(e) => setRequest(e.target.value)}
            />
          </S.RequestBox>
          <S.CreateButtonWrap>
            <S.CreateButton onClick={fetchData}>
              <S.CreateButtonText>제작하기</S.CreateButtonText>
            </S.CreateButton>
          </S.CreateButtonWrap>
        </S.LeftWrap>
      </S.LeftContainer>
      <GPTResult mdTitle={mdTitle} mdContent={mdContent} />
    </S.CreateContainer>
  );
}
