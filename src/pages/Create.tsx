import { ImageUpload } from "../components/ImageUpload";
import StoreInfo from "../components/StoreInfo";
import * as S from "../styles/pages/Create.styles";
import { useState } from "react";
import HashTag from "../components/HashTag";

export function Create() {
  const [tagList, setTagList] = useState<string[]>([]);
  const [images, setImages] = useState<{ file: File; preview: string }[]>([]);

  return (
    <S.CreateContainer>
      <S.LeftContainer>
        <StoreInfo />
        <ImageUpload images={images} setImages={setImages} />
        <HashTag tagList={tagList} setTagList={setTagList} />
      </S.LeftContainer>
      {/* right */}
    </S.CreateContainer>
  );
}
