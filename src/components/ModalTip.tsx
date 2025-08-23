import { motion } from "framer-motion";
import * as S from "../styles/component/ModalTip.styles";
import TablerRobot from "../assets/tabler_robot.svg";
import ModalTip1 from "./ModalTip1";
import ModalTip2 from "./ModalTip2";
import ModalTip3 from "./ModalTip3";

export function ModalTip({
  title,
  setIsTipVisible,
}: {
  title: string | undefined;
  setIsTipVisible: (isVisible: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <S.ModalContainer onClick={() => setIsTipVisible(false)}>
        <S.ModalLayout onClick={(e) => e.stopPropagation()}>
          <S.ModalHeader>
            <S.ModalProfile>
              <S.ModalProfileImage src={TablerRobot} alt="Profile Image" />
              <S.ModalProfileName>홍보봇 사용 TIP</S.ModalProfileName>
            </S.ModalProfile>
          </S.ModalHeader>
          <S.ModalContentTitle>
            {title === "블로그로 내 가게 홍보가 될까?"
              ? "블로그 홍보글 생성 방법"
              : title === "내 가게의 편의시설을 홍보하고 싶다면?"
              ? "내 가게 편의시설 체크 방법"
              : "내 홍보글 확인 및 공유 방법"}
          </S.ModalContentTitle>
          <S.ModalContentLineBox>
            <S.ModalContentLine />
          </S.ModalContentLineBox>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            {title === "블로그로 내 가게 홍보가 될까?" ? (
              <ModalTip1 />
            ) : title === "내 가게의 편의시설을 홍보하고 싶다면?" ? (
              <ModalTip2 />
            ) : (
              <ModalTip3 />
            )}
          </div>
        </S.ModalLayout>
      </S.ModalContainer>
    </motion.div>
  );
}
