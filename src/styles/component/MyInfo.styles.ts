import styled from "styled-components";

export const MyInfoContainer = styled.div<{ isVisible: boolean }>`
  width: 388px;
  height: 1024px;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 54px;
  padding-left: 33px;

  transform: ${(props) =>
    props.isVisible ? "translateX(0)" : "translateX(100%)"};

  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const CancelImg = styled.img`
  position: absolute;
  top: 18px;
  width: 18px;
  cursor: pointer;
`;

export const MyInfoTypeWrapper = styled.div`
  display: flex;
  gap: 132px;
`;

export const MyInfoTypeBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const MyInfoType = styled.div`
  display: flex;
  width: 63px;
  height: 25px;
  padding: 4px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid #3a62a5;
`;

export const MyInfoTypeText = styled.p`
  color: #003566;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const MyGrade = styled.div`
  display: flex;
  width: 74px;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  margin-left: -16px;
`;

export const MyGradeText = styled.p`
  color: #f35400;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 52px;
`;

export const MyGradeLine = styled.div`
  width: 74px;
  height: 1px;
  background-color: #3a62a5;
`;

export const InfoChange = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const InfoChangeText = styled.p`
  color: #4f4f4f;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InfoChangeIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const InfoProfileWrap = styled.div`
  display: flex;
  width: 318px;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  margin-top: 42px;
`;

export const InfoProfileBox = styled.div`
  display: flex;
  width: 225px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const InfoProfileImage = styled.img`
  width: 165px;
  height: 165px;
  border-radius: 165px;
`;

export const InfoProfileStoreName = styled.p`
  color: #212121;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InfoProfileStoreDescription = styled.p`
  color: #4f4f4f;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const SmallTitle = styled.p`
  color: #4f4f4f;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SmallDescription = styled.p`
  color: #4f4f4f;
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

export const PromotionWrapper = styled.div`
  margin-top: 74px;
  display: flex;
  width: 318px;
  padding: 15px 17px 15px 17px;
  flex-direction: column;
  align-items: center;
  gap: 31px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
`;

export const PromotionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const SideNavTitleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

export const SideNavTitleImage = styled.img`
  width: 34px;
  height: 34px;
`;

export const SideNavTitle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #f35400;
`;

export const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  align-self: stretch;
`;

export const ExplainTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

export const ExBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 11px;
`;

export const ExTitle = styled.p`
  color: #4f4f4f;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ExLine = styled.div`
  width: 58px;
  height: 1px;
  background-color: #000;
  margin-top: 1px;
`;

export const ResultBox = styled.div`
  display: flex;
  padding: 0 10.5px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  align-self: stretch;
`;

export const ResultImg = styled.img`
  width: 96px;
  height: 96px;
`;

export const ResultTitle = styled.p`
  width: 236px;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ResultDescription = styled.p`
  width: 236px;
  color: #000;
  font-size: 11px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

export const ResultTag = styled.p`
  color: #000;
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 200px;
  height: 43px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #ff6700;
  box-shadow: 0 0 0 0 rgba(243, 84, 0, 0.7) inset;
  gap: 9px;
  cursor: pointer;
`;

export const ButtonImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const ButtonText = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
