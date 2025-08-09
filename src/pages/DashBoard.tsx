import * as S from "../styles/pages/DashBoard.styles";

export function DashBoard() {
  return (
    <S.DashBoardContainer>
      <S.TopWrapper>
        <S.DashBoardTitle>홍보글 추천</S.DashBoardTitle>
        <S.Line />
        <S.DashBoardGrid></S.DashBoardGrid>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.DashBoardTitle>홍보봇 사용 Tip</S.DashBoardTitle>
        <S.Line />
      </S.BottomWrapper>
    </S.DashBoardContainer>
  );
}
