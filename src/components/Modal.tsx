import { motion } from "framer-motion";
import * as S from "../styles/component/Modal.styles";
import DefaultImg from "../assets/default.svg";
import CommentImg from "../assets/comment.svg";
import CancelImg from "../assets/cancel.svg";
import HeartSvg from "../assets/heart_fill.svg";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { Promotion } from "../constants/promotion";

export default function Modal({
  setIsModalVisible,
  promotion,
}: {
  setIsModalVisible: (isVisible: boolean) => void;
  promotion: Promotion;
}) {
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [safeHtml, setSafeHtml] = useState<string>("");
  useEffect(() => {
    const cleanTitle = promotion.title.replace(/^#+\s*/, "").trim();
    setTitle(cleanTitle);

    const run = async () => {
      const html = await marked.parse(promotion.contentMd);
      const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
      setSafeHtml(clean);
    };
    run();
  }, [promotion]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <S.ModalContainer onClick={() => setIsModalVisible(false)}>
        <S.ModalLayout onClick={(e) => e.stopPropagation()}>
          <S.ModalHeader>
            <S.ModalProfile>
              <S.ModalProfileImage src={promotion.image} alt="Profile Image" />
              <S.ModalProfileName>{promotion.author}</S.ModalProfileName>
            </S.ModalProfile>
            <S.ModalChatSave>
              <S.ModalChatBox>
                <S.ModalChatImg
                  src={CommentImg}
                  alt="Comment Image"
                  onClick={() => setIsChatVisible(!isChatVisible)}
                />
                <S.ModalChatCount>{promotion.comments}</S.ModalChatCount>
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
          <S.ChatWrapper>
            <S.ChatTitleBox>
              <S.ChatTitle>{title}</S.ChatTitle>
              <S.ChatTitleDate>{promotion.createdAt}</S.ChatTitleDate>
            </S.ChatTitleBox>
            <S.ChatContentBox>
              <S.ChatContent dangerouslySetInnerHTML={{ __html: safeHtml }} />
            </S.ChatContentBox>
            {isChatVisible && (
              <S.ModalChatting>
                <S.ModalChattingCount>댓글 5개</S.ModalChattingCount>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <S.ChatBox key={index}>
                    <S.ChatBoxImg src={DefaultImg} alt="User Image" />
                    <S.ChatTextBox>
                      <S.ChatBoxTop>
                        <S.ChatBoxName>스타벅스</S.ChatBoxName>
                        <S.ChatBoxContent>안녕하세요!</S.ChatBoxContent>
                      </S.ChatBoxTop>
                      <S.ChatBoxBottom>
                        <S.ChatBoxDate>4일 전</S.ChatBoxDate>
                        <S.ChatBoxLike>좋아요 6개</S.ChatBoxLike>
                      </S.ChatBoxBottom>
                    </S.ChatTextBox>
                    <S.HeartImg src={HeartSvg} alt="Heart Image" />
                  </S.ChatBox>
                ))}
                <S.ChatInput
                  placeholder="댓글 추가"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      alert("댓글 작성 기능은 아직 구현되지 않았습니다.");
                    }
                  }}
                />
              </S.ModalChatting>
            )}
          </S.ChatWrapper>
        </S.ModalLayout>
      </S.ModalContainer>
    </motion.div>
  );
}
