import * as S from "../styles/component/Card.styles";
import DefaultImg from "../assets/default.svg";
import LikeImg from "../assets/heart.svg";
import ViewImg from "../assets/eye.svg";

export function Card({
  setIsModalVisible,
}: {
  setIsModalVisible: (isVisible: boolean) => void;
}) {
  return (
    <S.CardContainer onClick={() => setIsModalVisible(true)}>
      <S.CardImage src={DefaultImg} alt="Card Image" />
      <S.CardCaptionBox>
        <S.CardCaptionTitle>카페</S.CardCaptionTitle>
      </S.CardCaptionBox>
      <S.CardProfileWrap>
        <S.CardProfileBox>
          <S.CardProfileImage src={DefaultImg} alt="Profile Image" />
          <S.CardProfileName>스타벅스</S.CardProfileName>
        </S.CardProfileBox>
        <S.LikeViewWrap>
          <S.LikeViewBox>
            <S.LikeViewImage src={LikeImg} alt="Like Icon" />
            <S.Count>26</S.Count>
          </S.LikeViewBox>
          <S.LikeViewBox>
            <S.LikeViewImage src={ViewImg} alt="View Icon" />
            <S.Count>612</S.Count>
          </S.LikeViewBox>
        </S.LikeViewWrap>
      </S.CardProfileWrap>
    </S.CardContainer>
  );
}
