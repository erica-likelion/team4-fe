import { useNavigate } from "react-router-dom";
import * as S from "../styles/component/MyInfo.styles";
import RightArrowSvg from "../assets/right.svg";
import DefaultImg from "../assets/default.svg";
import CharacterSvg from "../assets/character.svg";
import WriteSvg from "../assets/write.svg";
import Cancel from "../assets/cancel.svg";
import axios from "axios";
import { useEffect, useState } from "react";

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

export function MyInfo({
  isVisible,
  onClick,
}: {
  isVisible: boolean;
  onClick: () => void;
}) {
  const navigate = useNavigate();
  const [myInfo, setMyInfo] = useState<MyInfo | null>(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(
          "http://3.34.142.160:8080/api/dashboard/stores/1"
        );
        console.log(response.data);
        setMyInfo(response.data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };
    fetchStoreData();
  }, []);

  return (
    <S.MyInfoContainer isVisible={isVisible}>
      <S.CancelImg src={Cancel} onClick={onClick} alt="캔슬" />
      <S.MyInfoTypeWrapper>
        <S.MyInfoTypeBox>
          <S.MyInfoType>
            <S.MyInfoTypeText>{"카페"}</S.MyInfoTypeText>
          </S.MyInfoType>
          <S.MyGrade>
            <S.MyGradeText>Free Plan</S.MyGradeText>
            <S.MyGradeLine />
          </S.MyGrade>
        </S.MyInfoTypeBox>
        <S.InfoChange onClick={() => navigate("/my")}>
          <S.InfoChangeText>정보 수정</S.InfoChangeText>
          <S.InfoChangeIcon src={RightArrowSvg} />
        </S.InfoChange>
      </S.MyInfoTypeWrapper>
      <S.InfoProfileWrap>
        <S.InfoProfileBox>
          <S.InfoProfileImage src={myInfo?.storeImage} alt="Profile" />
          <S.InfoProfileStoreName>{myInfo?.storeName}</S.InfoProfileStoreName>
          <S.InfoProfileStoreDescription>
            {myInfo?.information}
          </S.InfoProfileStoreDescription>
        </S.InfoProfileBox>
        <S.LocationBox>
          <S.SmallTitle>위치</S.SmallTitle>
          <S.SmallDescription>{myInfo?.location}</S.SmallDescription>
        </S.LocationBox>
        <S.TimeBox>
          <S.SmallTitle>영업시간</S.SmallTitle>
          <S.SmallDescription>
            {`매일 ${myInfo?.openTime}:00 ~ ${myInfo?.closeTime}:00(라스트 오더
            20:30)`}
          </S.SmallDescription>
        </S.TimeBox>
      </S.InfoProfileWrap>
      <S.PromotionWrapper>
        <S.PromotionBox>
          <S.SideNavTitleWrap>
            <S.SideNavTitleImage src={CharacterSvg} />
            <S.SideNavTitle>홍보봇</S.SideNavTitle>
          </S.SideNavTitleWrap>
          <S.ExplainBox>
            <S.ExplainTitle>{`이미지를 업로드하면,\n홍보봇이 홍보글을 자동으로 작성해드려요!`}</S.ExplainTitle>
            <S.ExBox>
              <S.ExTitle>홍보글 예시</S.ExTitle>
              <S.ExLine />
              <S.ExLine />
            </S.ExBox>
          </S.ExplainBox>
          <S.ResultBox>
            <S.ResultImg src={DefaultImg} alt="Result" />
            <S.ResultTitle>
              햇살 가득한 아치 창과 따뜻한 우드톤 인테리어!
            </S.ResultTitle>
            <S.ResultDescription>
              창밖 풍경을 바라보며 여유롭게 카공(카페 공부)하기 딱 좋은
              공간이에요. 조용한 분위기에서 집중도 하고, 감성도 충전하세요 ☕📚
            </S.ResultDescription>
            <S.ResultTag>#카공카페 #감성카페 #우드톤 인테리어</S.ResultTag>
          </S.ResultBox>
        </S.PromotionBox>
        <S.ButtonBox>
          <S.ButtonImg src={WriteSvg} alt="Write" />
          <S.ButtonText onClick={() => navigate("/create")}>
            홍보글 만들기
          </S.ButtonText>
        </S.ButtonBox>
      </S.PromotionWrapper>
    </S.MyInfoContainer>
  );
}
