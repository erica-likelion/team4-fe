import styled from "styled-components";

export const ResultContainer = styled.div`
  position: fixed;
  right: 0;
  width: 677px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;
`;

export const ResultTitleWrap = styled.div`
  width: 606px;
  display: flex;
  align-items: center;
  gap: 197px;
`;

export const ResultTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 6px;
`;

export const ResultTitle = styled.p`
  color: #f35400;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ResultDescription = styled.p`
  color: #4f4f4f;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 66px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #001d3d;
  flex-shrink: 0;
  cursor: pointer;
`;

export const ButtonText = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ChatWrapper = styled.div`
  display: flex;
  width: 635px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 24px;
`;

export const ChatTitleBox = styled.div`
  display: flex;
  width: 635px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
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
  width: 635px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  max-height: calc(100vh - 350px);
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

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 28px;
`;

export const ChatBoxTop = styled.div`
  width: 614px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 16px 16px 0 0;
  border: 1px solid #003566;
  background-color: #003566;
  display: flex;
  align-items: center;
  gap: 458px;
  padding-left: 18px;
`;
export const ChatBoxTopTitle = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ChatBoxTopSend = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const ChatBoxBottom = styled.textarea`
  width: 614px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 0 0 20px 20px;
  border: 2px solid #003566;
  background: #fff;
  resize: none;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 11px 18px;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  ::placeholder {
    color: #4f4f4f;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
