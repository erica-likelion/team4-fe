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
  overflow-y: auto;
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
  color: #003566;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ModalContentTitle = styled.p`
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 41px;
  margin-left: 67px;
`;

export const ModalContentLineBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

export const ModalContentLine = styled.div`
  width: 1023px;
  height: 1px;
  background: #2c2424ff;
`;
