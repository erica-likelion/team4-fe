import styled from "styled-components";

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 120px;
`;

export const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 53px;
`;

export const DashBoardTitle = styled.h1`
  margin-left: 43px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #000;
`;

export const Line = styled.div`
  width: 99%;
  height: 1px;
  background-color: #dfdfdf;
  margin-left: 18px;
  margin-top: 19px;
`;

export const DashBoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 50px;
  column-gap: 40px;
  margin-top: 44px;
  margin-left: 54px;
  width: 100%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  height: 417px;
  flex-direction: column;
  padding-top: 74px;
`;

export const TipWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-left: 43px;
  margin-top: 18px;
`;

export const Tip = styled.div`
  width: 211px;
  height: 254px;
  border-radius: 12px;
  background: #d9d9d9;
  padding-left: 16px;
  padding-top: 16px;
  margin-bottom: 75px;
`;

export const TipTitle = styled.p`
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

export const TipDescription = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 11px;
`;
