import { motion } from "framer-motion";
import * as S from "../styles/component/Modal.styles";
import DefaultImg from "../assets/default.svg";
import CommentImg from "../assets/comment.svg";
import CancelImg from "../assets/cancel.svg";

export default function Modal({
  setIsModalVisible,
}: {
  setIsModalVisible: (isVisible: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.ModalContainer>
        <S.ModalLayout>
          <S.ModalHeader>
            <S.ModalProfile>
              <S.ModalProfileImage src={DefaultImg} alt="Profile Image" />
              <S.ModalProfileName>스타벅스</S.ModalProfileName>
            </S.ModalProfile>
            <S.ModalChatSave>
              <S.ModalChatBox>
                <S.ModalChatImg src={CommentImg} alt="Comment Image" />
                <S.ModalChatCount>1</S.ModalChatCount>
              </S.ModalChatBox>
              <S.ModalSaveButton>
                <S.ModalSaveButtonText>저장</S.ModalSaveButtonText>
              </S.ModalSaveButton>
            </S.ModalChatSave>
            <S.ModalCancelImg
              src={CancelImg}
              alt="Cancel Image"
              onClick={() => setIsModalVisible(false)}
            />
          </S.ModalHeader>
        </S.ModalLayout>
      </S.ModalContainer>
    </motion.div>
  );
}
