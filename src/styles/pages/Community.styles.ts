import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding-left: 120px;
  background: #f8f8f8;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 29px;
  margin-left: 76px;
  padding-right: 24px;
  gap: 30px;
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const SearchBarSprite = styled.div`
  position: relative;
  width: 100%;
  min-width: 200px;
  height: 47px;
  border-radius: 20px;
  border: 1px solid #bababa;
  background: #f8f8f8;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 23px;
  top: 11px;
  width: 25px;
  height: 25px;
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
  outline: none;

  /* 위치 스펙: L=55px, T=15px, H=21px → 남은 B=11px */
  padding-left: 55px;
  padding-top: 15px;
  padding-bottom: 11px;
  padding-right: 16px;

  /* 타이포 스펙 */
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */

  &::placeholder {
    color: #818181;
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`;

export const ShareButton = styled.button`
  margin-left: 18px;
  height: 40px;
  padding: 0 16px;
  border-radius: 10px;
  border: 0;
  background: #ff6700;
  color: #fff;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;

  .plus {
    font-size: 18px;
    line-height: 1;
  }
`;

/* ===== 카드 그리드 =====*/
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 188px;
  column-gap: 74.5px;
  row-gap: 50px;
  margin-top: 47px;
  margin-left: 76px;
  padding: 0 24px 60px 0;
`;

export const GridItem = styled.div``;
