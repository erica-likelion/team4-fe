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
  const fetchData = async () => {
    const response = await axios.post(
      "http://3.34.142.160:8081/api/made/user-input",
      {
        storeId: 1,
        userInput: "맛있는 커피를 마시고 싶어요",
        prompt: request,
      }
    );
    console.log(response.data);
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
      <GPTResult />
    </S.CreateContainer>
  );
}
