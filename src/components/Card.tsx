import * as S from "../styles/component/Card.styles";
import DefaultImg from "../assets/default.svg";
import LikeImg from "../assets/heart.svg";
import ViewImg from "../assets/eye.svg";
import { Promotion } from "../constants/promotion";

interface CardProps {
  data: Promotion;
  onClick: () => void;
}

export function Card({ data, onClick }: CardProps) {
  return (
    <S.CardContainer onClick={onClick}>
      <S.CardImage src={data.image} alt="Card Image" />
      <S.CardCaptionBox>
        <S.CardCaptionTitle>카페</S.CardCaptionTitle>
      </S.CardCaptionBox>
      <S.CardProfileWrap>
        <S.CardProfileBox>
          <S.CardProfileImage src={data.image} alt="Profile Image" />
          <S.CardProfileName>{data.author}</S.CardProfileName>
        </S.CardProfileBox>
        <S.LikeViewWrap>
          <S.LikeViewBox>
            <S.LikeViewImage src={LikeImg} alt="Like Icon" />
            <S.Count>{data.likes}</S.Count>
          </S.LikeViewBox>
          <S.LikeViewBox>
            <S.LikeViewImage src={ViewImg} alt="View Icon" />
            <S.Count>{data.comments}</S.Count>
          </S.LikeViewBox>
        </S.LikeViewWrap>
      </S.CardProfileWrap>
    </S.CardContainer>
  );
}
