import * as S from "../styles/pages/DashBoard.styles";
import { Card } from "../components/Card";
import { MyInfo } from "../components/MyInfo";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import BlogPost from "../assets/blog-post.svg";
import Convenece from "../assets/convenence.svg";
import NoteBook from "../assets/notebook.svg";
import { ModalTip } from "../components/ModalTip";

const DATA = [
  {
    title: "블로그로 내 가게 홍보가 될까?",
    subTitle: "블로그 홍보글 생성 방법",
    img: BlogPost,
    background: "#F4D2B2",
  },
  {
    title: "내 가게의 편의시설을 홍보하고 싶다면?",
    subTitle: "내 가게 편의시설 체크 방법",
    img: Convenece,
    background: "#EFD0D7",
  },
  {
    title: "내가 생성한 홍보물을 커뮤니티에 공유하려면?",
    subTitle: "내 홍보글 확인 및 공유 방법",
    img: NoteBook,
    background: "#CADBE7",
  },
];

interface DATAProps {
  title: string;
  subTitle: string;
  img: string;
  background: string;
}

export function DashBoard() {
  const [isMyInfoVisible, setIsMyInfoVisible] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isTipVisible, setIsTipVisible] = useState<boolean>(false);
  const [selectedTip, setSelectedTip] = useState<DATAProps | null>(null);

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
          {DATA.map((item, index) => {
            return (
              <S.Tip
                key={index}
                $Background={item.background}
                onClick={() => {
                  setSelectedTip(item);
                  setIsTipVisible(true);
                }}
              >
                <S.TipTitle>{item.title}</S.TipTitle>
                <S.TipDescription>{item.subTitle}</S.TipDescription>
                <S.TipImageWrapper>
                  <S.TipImage src={item.img} alt="Tip Image" />
                </S.TipImageWrapper>
              </S.Tip>
            );
          })}
        </S.TipWrapper>
      </S.BottomWrapper>
      <MyInfo isVisible={isMyInfoVisible} onClick={toggleMyInfo} />
      <AnimatePresence>
        {isModalVisible && <Modal setIsModalVisible={setIsModalVisible} />}
      </AnimatePresence>
      <AnimatePresence>
        {isTipVisible && (
          <ModalTip
            title={selectedTip?.title}
            setIsTipVisible={setIsTipVisible}
          />
        )}
      </AnimatePresence>
    </S.DashBoardContainer>
  );
}
