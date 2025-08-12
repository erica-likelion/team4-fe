import * as S from "../styles/component/HashTag.styles";
import DeleteIcon from "../assets/cancel.svg";

interface HashTagProps {
  tagList: string[];
  setTagList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function HashTag({ tagList, setTagList }: HashTagProps) {
  const handleDelete = (tag: string) => {
    setTagList(tagList.filter((t) => t !== tag));
  };

  const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newTag = event.currentTarget.value.trim();
      if (newTag && !tagList.includes(newTag)) {
        setTagList([...tagList, newTag]);
        event.currentTarget.value = "";
      }
    }
  };
  return (
    <S.HashTagWrap>
      <S.HashTagTitle>해시태그</S.HashTagTitle>
      <S.HashTagInput
        placeholder="해시태그를 입력하세요."
        onKeyDown={handleAddTag}
      />
      <S.HashTagList>
        {tagList.map((tag) => (
          <S.HashTagTextBox key={tag}>
            <S.HashTagText>#{tag}</S.HashTagText>
            <S.HashTagDeleteButton
              src={DeleteIcon}
              alt="Delete"
              onClick={() => handleDelete(tag)}
            />
          </S.HashTagTextBox>
        ))}
      </S.HashTagList>
    </S.HashTagWrap>
  );
}
