import * as S from "../styles/component/StoreInfo.styles";
import RightArrowSvg from "../assets/right.svg";
import { useNavigate } from "react-router-dom";
import DefaultImg from "../assets/default.svg";

export default function StoreInfo() {
  const navigate = useNavigate();

  return (
    <S.StoreInfoContainer>
      <S.StoreInfoBox>
        <S.StoreInfoTitle>가게 정보</S.StoreInfoTitle>
        <S.InfoChange onClick={() => navigate("/my")}>
          <S.InfoChangeText>정보 수정</S.InfoChangeText>
          <S.InfoChangeIcon src={RightArrowSvg} />
        </S.InfoChange>
      </S.StoreInfoBox>
      <S.StoreInfoWrap>
        <S.StoreInfoImage src={DefaultImg} alt="가게 이미지" />
        <S.StoreInfoTextWrap>
          <S.StoreInfoTitleTagBox>
            <S.StoreInfoTitleTagText>스타벅스</S.StoreInfoTitleTagText>
            <S.StoreInfoTagBox>
              <S.StoreInfoTagText>카페</S.StoreInfoTagText>
            </S.StoreInfoTagBox>
          </S.StoreInfoTitleTagBox>
          <S.StoreInfoTextBox>
            <S.StoreInfoText>영업시간: 매일 10:00~21:00</S.StoreInfoText>
            <S.StoreInfoText>
              위치: 경기도 안산시 상록구 사동 0000-000
            </S.StoreInfoText>
            <S.StoreInfoText>주차 정보: 무료 주차</S.StoreInfoText>
            <S.StoreInfoText>연락처: 031-0000-0000</S.StoreInfoText>
          </S.StoreInfoTextBox>
          <S.MoreInfo>
            <S.MoreInfoText>더보기</S.MoreInfoText>
            <S.MoreInfoIcon src={RightArrowSvg} />
          </S.MoreInfo>
        </S.StoreInfoTextWrap>
      </S.StoreInfoWrap>
    </S.StoreInfoContainer>
  );
}
