import styled from "styled-components";

export const DashBoardContainer = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: column;
  justify-content: center;
`;

export const TopWrapper = styled.div`
  display: flex;
  height: 607px;
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
  grid-template-columns: repeat(3, 1fr);
  row-gap: 70px;
  column-gap: 51px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  height: 417px;
  flex-direction: column;
`;
