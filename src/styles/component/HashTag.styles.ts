import styled from "styled-components";

export const HashTagWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

export const HashTagTitle = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const HashTagInput = styled.input`
  width: 554px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #acacac;
  padding: 16px 11px;
  color: #4f4f4f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ::placeholder {
    color: #4f4f4f;
  }
`;

export const HashTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 554px;
  gap: 12px;
`;

export const HashTagTextBox = styled.div`
  display: inline-flex;
  height: 22px;
  padding: 5px 7px;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;

  border-radius: 4px;
  border: 1px solid #9b9b9b;
`;

export const HashTagText = styled.p`
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HashTagDeleteButton = styled.img`
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
