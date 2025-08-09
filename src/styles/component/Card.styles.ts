import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 200px;
  height: 188px;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  position: relative;
`;

export const CardImage = styled.img`
  width: 200px;
  height: 155px;
  object-fit: cover;
`;

export const CardCaptionBox = styled.div`
  position: absolute;
  top: 7px;
  left: 7px;
  display: flex;
  height: 18px;
  padding: 3px 9px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 23px;
  background-color: #f2f2f2;
`;

export const CardCaptionTitle = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #003566;
`;

export const CardProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
`;

export const CardProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const CardProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 24px;
`;

export const CardProfileName = styled.p`
  color: #898989;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LikeViewWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LikeViewImage = styled.img`
  width: 16px;
  height: 16px;
  aspect-ratio: 1/1;
`;

export const LikeViewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const Count = styled.p`
  color: #8d8d8d;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
