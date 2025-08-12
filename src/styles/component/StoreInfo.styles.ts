import styled from "styled-components";

export const StoreInfoContainer = styled.div`
  width: 544px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StoreInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StoreInfoTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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

export const StoreInfoWrap = styled.div`
  height: 178px;
  align-self: stretch;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  padding-left: 28px;
  align-items: center;
  margin-top: 19px;
`;

export const StoreInfoImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 120px;
`;

export const StoreInfoTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 69px;
`;

export const StoreInfoTitleTagBox = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

export const StoreInfoTitleTagText = styled.div`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StoreInfoTagBox = styled.div`
  display: inline-flex;
  height: 18px;
  padding: 3px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 22px;
  border: 1px solid #3a62a5;
  background: #fff;
`;

export const StoreInfoTagText = styled.p`
  color: #3a62a5;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StoreInfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  gap: 7px;
`;

export const StoreInfoText = styled.p`
  color: #000;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 9px;
`;

export const MoreInfoText = styled.p`
  color: #4f4f4f;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MoreInfoIcon = styled.img`
  width: 14px;
  height: 14px;
  transform: rotate(90deg);
`;
