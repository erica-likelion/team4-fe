import * as S from "../styles/component/StoreInfo.styles";
import RightArrowSvg from "../assets/right.svg";
import { useNavigate } from "react-router-dom";
import DefaultImg from "../assets/default.svg";
import { useEffect, useState } from "react";
import axios from "axios";

interface MyInfo {
  storeId: number;
  storeName: string;
  storeImage: string;
  information: string;
  location: string;
  businessType: string;
  openTime: number;
  closeTime: number;
  closedDays: string;
  reservation: boolean;
  menu: string;
  count: number;
  convenience: {
    wifi: boolean;
    outlet: boolean;
    pet: boolean;
    packagingDelivery: boolean;
  };
}

export default function StoreInfo() {
  const navigate = useNavigate();
  const [myInfo, setMyInfo] = useState<MyInfo | null>(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(
          "http://3.34.142.160:8080/api/dashboard/stores/1"
        );
        setMyInfo(response.data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };
    fetchStoreData();
  }, []);

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
        <S.StoreInfoImage src={myInfo?.storeImage} alt="가게 이미지" />
        <S.StoreInfoTextWrap>
          <S.StoreInfoTitleTagBox>
            <S.StoreInfoTitleTagText>
              {myInfo?.storeName}
            </S.StoreInfoTitleTagText>
            <S.StoreInfoTagBox>
              <S.StoreInfoTagText>카페</S.StoreInfoTagText>
            </S.StoreInfoTagBox>
          </S.StoreInfoTitleTagBox>
          <S.StoreInfoTextBox>
            <S.StoreInfoText>{`영업시간: 매일 ${myInfo?.openTime}:00~${myInfo?.closeTime}:00`}</S.StoreInfoText>
            <S.StoreInfoText>{myInfo?.location}</S.StoreInfoText>
            <S.StoreInfoText>주차 정보: 무료 주차</S.StoreInfoText>
            <S.StoreInfoText>연락처: 031-400-1086</S.StoreInfoText>
          </S.StoreInfoTextBox>
        </S.StoreInfoTextWrap>
      </S.StoreInfoWrap>
    </S.StoreInfoContainer>
  );
}
