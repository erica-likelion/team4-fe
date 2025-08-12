import { ImageUpload } from "../components/ImageUpload";
import StoreInfo from "../components/StoreInfo";
import * as S from "../styles/pages/Create.styles";

export function Create() {
  return (
    <S.CreateContainer>
      <S.LeftContainer>
        <StoreInfo />
        <ImageUpload />
      </S.LeftContainer>
      {/* right */}
    </S.CreateContainer>
  );
}
