import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalLayout = styled.div`
  width: 1158px;
  height: 800px;
  background: #fff;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
  width: 1156px;
  height: 98px;
  flex-shrink: 0;
  border-bottom: 1px solid #bdbdbd;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 11px;
  padding-right: 95px;
  position: relative;
`;

export const ModalProfile = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;

export const ModalProfileImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

export const ModalProfileName = styled.p`
  color: #212121;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ModalChatSave = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
`;

export const ModalChatBox = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const ModalChatImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ModalChatCount = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ModalSaveButton = styled.button`
  display: flex;
  height: 33px;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #ff6700;
  border: none;
  cursor: pointer;
`;

export const ModalSaveButtonText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ModalCancelImg = styled.img`
  position: absolute;
  right: 13px;
  top: 9px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ChatWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
  position: relative;
`;

export const ChatTitleBox = styled.div`
  display: flex;
  width: 970px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #dbdbdb;
`;

export const ChatTitleDate = styled.p`
  display: flex;
  justify-content: center;
  color: #828282;
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ChatTitle = styled.p`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ChatContentBox = styled.div`
  display: flex;
  width: 970px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  height: 550px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const ChatContent = styled.p`
  width: 615px;
  line-height: 1.7;
  color: #111;

  h1 {
    font-size: 22px;
    font-weight: 800;
    margin: 16px 0;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 14px 0;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 12px 0;
  }
  p {
    font-size: 14px;
    margin: 8px 0;
  }
  ul {
    padding-left: 20px;
  }
  li {
    list-style: disc;
    margin: 4px 0;
  }
`;

export const ModalChatting = styled.div`
  width: 389px;
  height: 503px;
  overflow-y: auto;
  flex-shrink: 0;
  border-radius: 24px;
  background: #001d3d;
  position: absolute;
  top: -25px;
  right: 49px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-top: 20px;
  padding-left: 32px;
`;

export const ModalChattingCount = styled.p`
  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ChatBox = styled.div`
  display: flex;
  width: 330px;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

export const ChatBoxImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 38px;
`;

export const ChatTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const HeartImg = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export const ChatBoxTop = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  align-self: stretch;
`;

export const ChatBoxName = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const ChatBoxContent = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ChatBoxBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  align-self: stretch;
`;
export const ChatBoxDate = styled.p`
  color: #bdbdbd;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const ChatBoxLike = styled.p`
  color: #bdbdbd;
  font-size: 9px;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;

export const ChatInput = styled.input`
  display: flex;
  width: 335px;
  height: 33px;
  align-items: center;
  border-radius: 100px;
  background: #fff;
  padding-left: 18px;
`;
