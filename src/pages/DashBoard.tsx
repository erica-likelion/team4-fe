import * as S from "../styles/pages/DashBoard.styles";
import { Card } from "../components/Card";
import { MyInfo } from "../components/MyInfo";

export function DashBoard() {
  return (
    <S.DashBoardContainer>
      <S.TopWrapper>
        <S.DashBoardTitle>홍보글 추천</S.DashBoardTitle>
        <S.Line />
        <S.DashBoardGrid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
            return <Card key={index} />;
          })}
        </S.DashBoardGrid>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.DashBoardTitle>홍보봇 사용 Tip</S.DashBoardTitle>
        <S.Line />
        <S.TipWrapper>
          {[1, 2, 3, 4, 5].map((_, index) => {
            return (
              <S.Tip key={index}>
                <S.TipTitle>Tip {index + 1}</S.TipTitle>
                <S.TipDescription>
                  이곳에 팁 내용을 작성하세요.
                </S.TipDescription>
              </S.Tip>
            );
          })}
        </S.TipWrapper>
      </S.BottomWrapper>
      <MyInfo />
    </S.DashBoardContainer>
  );
}
