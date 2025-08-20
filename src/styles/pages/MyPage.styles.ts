import styled, { css } from "styled-components";

import defaultThumbUrl from "../../assets/default.svg";
import heartUrl from "../../assets/heart.svg";
import eyeUrl from "../../assets/eye.svg";

const ORANGE = "#FF7A2D";
const ORANGE_SOFT = "#FFF1E8";
const BORDER = "#E5E5E5";
const TEXT3 = "#8E8E8E";

export const SECTION_TITLE_TYPO = css`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 26px;
  font-weight: 700;
`;

export const VALUE_TYPO = css`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 400;
`;

export const LABEL_TYPO = css`
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 22px;
  font-weight: 700;
`;

export const ONE_LINER_TYPO = css`
  color: var(--Text2, #4f4f4f);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 400;
`;

/* ===== 공통 베이스 ===== */
const PageBase = styled.div`
  width: 1440px;
  background: #fff;
  color: #111;
  font-family: "Noto Sans KR", system-ui, sans-serif;
  padding-left: 120px;
  overflow-x: hidden;
  overflow-y: hidden; /* 전체 페이지 스크롤 제거 */
`;

const InnerBase = styled.div`
  width: 100%;
  padding-left: 172px;
  display: flex;
  flex-direction: column;
`;

/* ===== 탭별 페이지 래퍼 ===== */
export const InfoPage = styled(PageBase)`
  height: 1595px;
`;

export const LogsPage = styled(PageBase)`
  height: 2002px;
`;

export const InfoInner = styled(InnerBase)`
  margin-bottom: 48px;
  height: 100%;
  min-height: 0;
`;

export const LogsInner = styled(InnerBase)`
  margin-bottom: 48px;
  height: 100%;
  min-height: 0;
`;

export const InfoArtboard = styled.div`
  flex: 1;
  min-height: 0;
`;

export const LogsArtboard = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden; /* 카드 내부에서만 스크롤 */
`;

/* ===== 공통 위젯 ===== */
export const TabRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Tab = styled.button<{ $active?: boolean }>`
  height: 36px;
  padding: 0 16px;
  border-radius: 18px;
  border: 1px solid ${(p) => (p.$active ? ORANGE : BORDER)};
  background: ${(p) => (p.$active ? ORANGE_SOFT : "#fff")};
  color: ${(p) => (p.$active ? ORANGE : "#333")};
  font-weight: 700;
`;

export const Save = styled.button`
  margin-left: auto;
  height: 36px;
  padding: 0 16px;
  border-radius: 8px;
  background: ${ORANGE};
  color: #fff;
  font-weight: 700;
  border: none;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${BORDER};
`;

export const Row = styled.div<{
  $alignTop?: boolean;
  $mt?: number;
  $mb?: number;
}>`
  display: grid;
  grid-template-columns: 180px 1fr;
  align-items: ${(p) => (p.$alignTop ? "flex-start" : "center")};
  padding: 0;
  column-gap: 16px;
  width: min(720px, 100%);
  margin-top: ${({ $mt = 0 }) => `${$mt}px`};
  margin-bottom: ${({ $mb = 0 }) => `${$mb}px`};
`;

export const Label = styled.div`
  ${LABEL_TYPO};
  text-align: left;
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${VALUE_TYPO};
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  padding: 0;
  outline: none;
  font: inherit;
  color: inherit;
  margin: 0;

  &::placeholder {
    color: ${TEXT3};
  }
`;

export const TimeLine = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 0;
  white-space: nowrap;

  margin: 0;
  padding: 0;

  .label {
    margin-right: 0;
  }
  .sep {
    margin: 0;
  }
  .lp {
    margin-left: 0;
  }
  .rp {
    margin-left: 0;
  }
`;

export const TimeInput = styled(Input)`
  min-width: 4ch;
  text-align: center;
  margin: 0;
`;

export const OneLinerWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  display: flex;
  height: 78px;
  padding: 8px 11px 46px 15px;
  align-items: center;
  border-radius: 11px;
  border: 1px solid #b9b9b9;
  background: #fff;
`;

export const OneLiner = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  ${ONE_LINER_TYPO};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${TEXT3};
  }
`;

export const Counter = styled.span`
  position: absolute;
  right: 12px;
  top: 14px;
  width: 28px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #afafaf;
  font-size: 10px;
  font-weight: 700;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileIcon160 = styled.label<{ $empty?: boolean }>`
  width: 160px;
  height: 160px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 50%;
  overflow: hidden;
  background: #d9d9d9; /* 항상 회색으로 시작 */
`;

export const BlankBox = styled.div`
  min-height: 260px;
  border-radius: 16px;
  border: 1px solid ${BORDER};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${TEXT3};
  font-size: 14px;
`;

/* ===== 정보 카드 ===== */
export const InfoWrapper = styled.div`
  margin-top: 74px;
`;
export const InfoCard = styled.section`
  width: 986px;
  min-height: 874px;
  border-radius: 25px;
  border: 2px solid #bdbdbd;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
export const InfoHead = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0 25px;
  padding-left: 43px;
  ${SECTION_TITLE_TYPO};
`;
export const InfoBody = styled.div`
  margin: 47px 0 67px;
  padding: 0 0 0 98px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/* ===== 편의시설 ===== */
export const AmenityWrapper = styled.div`
  margin-top: 108px;
  margin-bottom: 103px;
`;
export const AmenityCard = styled.section`
  width: 986px;
  height: 348px;
  border-radius: 25px;
  border: 2px solid #bdbdbd;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
export const AmenityHead = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 22px 25px 43px;
  ${SECTION_TITLE_TYPO};
`;

export const AmenityBody = styled.div`
  position: relative;
  padding: 0;
  flex: 1;
  overflow: hidden;
`;

export const AmenityCols = styled.div`
  position: absolute;
  inset: 0;
`;

const AmenityColBase = styled.div`
  position: absolute;
  display: flex;
  width: 329px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  top: 38px;
  bottom: 66px;
`;

export const AmenityColLeft = styled(AmenityColBase)`
  left: 57px;
`;

export const AmenityColRight = styled(AmenityColBase)`
  right: 164px;
`;

export const Amenity = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: default;
  user-select: none;

  color: #000;
  font-family: "Noto Sans KR";
  font-size: 17px;
  font-weight: 400;
  line-height: normal;
`;

/* 편의시설(Checkbox) */
const AMENITY_ICON_UNCHECKED =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'><path d='M3.43717 1.83325H18.5622C19.4477 1.83325 20.1663 2.55192 20.1663 3.43742V18.5624C20.1663 18.9879 19.9973 19.3959 19.6965 19.6967C19.3957 19.9976 18.9876 20.1666 18.5622 20.1666H3.43717C3.01172 20.1666 2.6037 19.9976 2.30286 19.6967C2.00202 19.3959 1.83301 18.9879 1.83301 18.5624V3.43742C1.83301 2.55192 2.55167 1.83325 3.43717 1.83325ZM3.20801 3.43742V18.5624C3.20801 18.6889 3.31067 18.7916 3.43717 18.7916H18.5622C18.623 18.7916 18.6812 18.7674 18.7242 18.7245C18.7672 18.6815 18.7913 18.6232 18.7913 18.5624V3.43742C18.7913 3.37664 18.7672 3.31835 18.7242 3.27537C18.6812 3.2324 18.623 3.20825 18.5622 3.20825H3.43717C3.3764 3.20825 3.31811 3.2324 3.27513 3.27537C3.23215 3.31835 3.20801 3.37664 3.20801 3.43742Z' fill='%23000'/></svg>\")";

const AMENITY_ICON_CHECKED =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'><path d='M17.2798 9.28C17.4123 9.13782 17.4845 8.94978 17.481 8.75548C17.4776 8.56118 17.3989 8.37579 17.2615 8.23838C17.1241 8.10097 16.9387 8.02225 16.7444 8.01882C16.5501 8.0154 16.362 8.08752 16.2198 8.22L10.2498 14.19L7.77985 11.72C7.63767 11.5875 7.44963 11.5154 7.25532 11.5188C7.06102 11.5223 6.87564 11.601 6.73822 11.7384C6.60081 11.8758 6.5221 12.0612 6.51867 12.2555C6.51524 12.4498 6.58737 12.6378 6.71985 12.78L9.71985 15.78C9.86047 15.9205 10.0511 15.9993 10.2498 15.9993C10.4486 15.9993 10.6392 15.9205 10.7798 15.78L17.2798 9.28Z' fill='%23000'/><path d='M3.75 2H20.25C21.216 2 22 2.784 22 3.75V20.25C22 20.7141 21.8156 21.1592 21.4874 21.4874C21.1592 21.8156 20.7141 22 20.25 22H3.75C3.28587 22 2.84075 21.8156 2.51256 21.4874C2.18437 21.1592 2 20.7141 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75V20.25C3.5 20.388 3.612 20.5 3.75 20.5H20.25C20.3163 20.5 20.3799 20.4737 20.4268 20.4268C20.4737 20.3799 20.5 20.3163 20.5 20.25V3.75C20.5 3.6837 20.4737 3.62011 20.4268 3.57322C20.3799 3.52634 20.3163 3.5 20.25 3.5H3.75C3.6837 3.5 3.62011 3.52634 3.57322 3.57322C3.52634 3.62011 3.5 3.6837 3.5 3.75Z' fill='%23000'/></svg>\")";

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 24px;
  height: 24px;
  aspect-ratio: 1 / 1;
  appearance: none;
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  background-image: ${AMENITY_ICON_UNCHECKED};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;

  &:checked {
    background-image: ${AMENITY_ICON_CHECKED};
    background-size: 24px 24px;
  }
`;

export const TabsSprite = styled.div<{ $bg: string }>`
  position: relative;
  width: 194px; /* 기본 SVG 크기 (JSX에서 250×48로 덮어씀) */
  height: 37px;
  flex: 0 0 auto;
  background: ${({ $bg }) => `url(${$bg}) no-repeat center / contain`};
`;

export const TabHitInfo = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 103px;
  height: 37px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

export const TabHitLogs = styled.button`
  position: absolute;
  top: 0;
  left: 103px;
  width: calc(100% - 103px);
  height: 37px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
`;

/* ===== Logs(기록 보기) 영역 ===== */
export const LogsWrapper = styled.div`
  margin-top: 57px;
  width: 986px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 57px;
  flex: 1;
  min-height: 0;
  overflow: visible;
`;

export const LogsCard = styled.section`
  margin-left: 0;
  width: 986px;
  border-radius: 25px;
  border: 2px solid #bdbdbd;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const LogsHead = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 25px;
  padding-left: 43px;
  ${SECTION_TITLE_TYPO};
  font-size: 26px;
`;

export const LogsBody = styled.div`
  padding: 28px 40px 40px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

/* 저장 목록 */
export const SavedListCard = styled(LogsCard)`
  height: 874px;
  display: grid;
  grid-template-rows: auto 1px minmax(0, 1fr);
  overflow: hidden;
  scrollbar-gutter: stable both-edges;
`;

export const SavedBody = styled(LogsBody)`
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 30px;
  padding-right: 16px;
  min-height: 0;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const SavedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 245px);
  gap: 58px;
  margin-top: 30px;
  justify-content: center;
  align-content: start;
`;

export const SavedCard = styled.div`
  width: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SavedThumb = styled.div`
  width: 245px;
  height: 190px;
  border-radius: 0;
  border: 1px solid ${BORDER};
  background: url(${defaultThumbUrl}) no-repeat center / cover;
`;

export const SavedMeta = styled.div`
  width: 245px;
  height: 24px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  padding: 0;
  border-radius: 0;
  box-sizing: border-box;
  gap: 7px;

  .right {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    gap: 16px;
  }

  .group {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    color: ${TEXT3};
    font-size: 12px;
    font-weight: 700;
  }

  .brand {
    color: #000;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SavedBrandThumb = styled.div`
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  border-radius: 50%;
  border: 1px solid ${BORDER};
  background: url(${defaultThumbUrl}) no-repeat center / cover;
`;

export const MetaIcon = styled.span<{ $type: "heart" | "eye" }>`
  width: 14px;
  height: 14px;
  display: inline-block;
  background: url(${(p) => (p.$type === "heart" ? heartUrl : eyeUrl)}) no-repeat
    center / contain;
`;

/* 홍보글 목록 */
export const ArticleList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 45px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ArticleItem = styled.li`
  display: grid;
  grid-template-columns: 198px 20px 1fr 195px auto;
  align-items: center;
  column-gap: 0;
  scroll-snap-align: start;
  min-height: 126px;
`;

export const ArticleThumb = styled.div`
  width: 198px;
  height: 126px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid ${BORDER};
  background: url(${defaultThumbUrl}) no-repeat center / cover;
`;

export const ArticleTitle = styled.div`
  grid-column: 3;
  min-width: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ArticlesBody = styled(LogsBody)`
  padding: 51px 102px 40px 81px; /* L=81, R=102, T=51 */
  overflow: hidden; /* 뷰포트에서만 스크롤 */
`;

export const ArticlesViewport = styled.div`
  height: calc(126px * 5 + 45px * 4); /* 810px (5행, 행 간격 45px) */
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0;
  scroll-snap-type: y mandatory;
  overscroll-behavior: contain;
  scrollbar-gutter: stable both-edges;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const ArticleTime = styled.div`
  grid-column: 5;
  color: ${TEXT3};
  font-size: 14px;
  min-width: 56px;
  text-align: right;
  justify-self: end;
`;

export const ArticlesListCard = styled(LogsCard)`
  height: 874px;
  display: grid;
  grid-template-rows: auto 1px minmax(0, 1fr);
  overflow: hidden; /* 이 카드 자체는 스크롤 금지, 내부 뷰포트가 스크롤 */
  box-sizing: border-box;
  scrollbar-gutter: stable both-edges;
`;
