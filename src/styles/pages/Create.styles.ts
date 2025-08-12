import styled from "styled-components";

export const CreateContainer = styled.div`
  display: flex;
  padding-left: 120px;
  width: 100%;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  padding-top: 53px;
  min-width: 643px;
`;

export const RequestBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22.5px;
  margin-top: 42px;
`;

export const RequestTitle = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const RequestInput = styled.textarea`
  width: 554px;
  height: 120px;
  padding: 14px 16px;
  border: 1px solid #acacac;
  border-radius: 10px;
  resize: none;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ::placeholder {
    color: #4f4f4f;
  }
`;
export const CreateButtonWrap = styled.div`
  width: 554px;
  display: flex;
  justify-content: center;
  padding-bottom: 28px;
`;

export const CreateButton = styled.button`
  display: flex;
  width: 170px;
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ff6700;
  margin-top: 56px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
`;

export const CreateButtonText = styled.p`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
