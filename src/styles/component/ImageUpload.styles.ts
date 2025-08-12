import styled from "styled-components";

export const ImageUploadContainer = styled.div`
  display: flex;
  width: 544px;
  height: 238px;
  flex-direction: column;
  margin-top: 25px;
`;

export const ImageUploadTitleBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ImageUploadTitle = styled.p`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ImageUploadInfoBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const ImageUploadInfoIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ImageUploadInfoText = styled.p`
  color: var(--Text2, #4f4f4f);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  row-gap: 31px;
  column-gap: 26px;
  margin-top: 28px;
`;

export const ImageUploadButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 80px;
  height: 100px;
`;

export const ImageUploadButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px dashed #828282;
  background: #fff;
  cursor: pointer;
`;

export const PlusIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ImageLabel = styled.span`
  color: #4f4f4f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const ImagePreview = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: flex-end;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 10px;
  position: relative;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const DeleteButton = styled.img`
  position: absolute;
  top: 4px;
  right: 5px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;
