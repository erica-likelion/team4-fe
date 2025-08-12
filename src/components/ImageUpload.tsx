import * as S from "../styles/component/ImageUpload.styles";
import InfoImage from "../assets/information.svg";
import PlusIcon from "../assets/plus.svg";
import DeleteIcon from "../assets/img-cancel.svg";

interface ImageUploadProps {
  images: { file: File; preview: string }[];
  setImages: React.Dispatch<
    React.SetStateAction<{ file: File; preview: string }[]>
  >;
}

export function ImageUpload({ images, setImages }: ImageUploadProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const files: File[] = Array.from(fileList);
    if (images.length + files.length > 9) {
      alert("이미지는 최대 9장까지 업로드할 수 있습니다.");
      return;
    }

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleImageDelete = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <S.ImageUploadContainer>
      <S.ImageUploadTitleBox>
        <S.ImageUploadTitle>사진 업로드</S.ImageUploadTitle>
        <S.ImageUploadInfoBox>
          <S.ImageUploadInfoIcon src={InfoImage} alt="Info" />
          <S.ImageUploadInfoText>
            이미지는 최대 9장까지 업로드할 수 있어요. 추가 업로드를 원하시면
            기존 이미지를 삭제해주세요.
          </S.ImageUploadInfoText>
        </S.ImageUploadInfoBox>
      </S.ImageUploadTitleBox>

      <S.ImageGrid>
        <S.ImageUploadButtonBox>
          <S.ImageUploadButton>
            <label>
              <input
                type="file"
                accept="image/*"
                multiple
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <S.PlusIcon src={PlusIcon} alt="Upload" />
            </label>
          </S.ImageUploadButton>
          <S.ImageLabel>새 이미지</S.ImageLabel>
        </S.ImageUploadButtonBox>

        {images.map((img, index) => (
          <S.ImagePreview key={index}>
            <S.PreviewImg src={img.preview} alt={`Uploaded ${index}`} />
            <S.DeleteButton
              src={DeleteIcon}
              alt="Delete"
              onClick={() => handleImageDelete(index)}
            />
          </S.ImagePreview>
        ))}
      </S.ImageGrid>
    </S.ImageUploadContainer>
  );
}
