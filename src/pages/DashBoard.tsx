import * as S from "../styles/pages/DashBoard.styles";
import { Card } from "../components/Card";
import { MyInfo } from "../components/MyInfo";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";

export function DashBoard() {
  const [isMyInfoVisible, setIsMyInfoVisible] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleMyInfo = () => {
    setIsMyInfoVisible(!isMyInfoVisible);
  };

  return (
    <S.DashBoardContainer>
      <S.TopWrapper>
        <S.DashBoardBox>
          <S.DashBoardTitle>홍보글 추천</S.DashBoardTitle>
          <S.Button onClick={toggleMyInfo}>내 카페 정보 보기</S.Button>
        </S.DashBoardBox>

        <S.Line />
        <S.DashBoardGrid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((_, index) => {
            return <Card key={index} setIsModalVisible={setIsModalVisible} />;
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
      <MyInfo isVisible={isMyInfoVisible} onClick={toggleMyInfo} />
      <AnimatePresence>
        {isModalVisible && <Modal setIsModalVisible={setIsModalVisible} />}
      </AnimatePresence>
    </S.DashBoardContainer>
  );
}
