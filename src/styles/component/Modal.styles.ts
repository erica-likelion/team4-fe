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
