import * as S from "../styles/component/GPTResult.styles";
import SendImg from "../assets/send.svg";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

export default function GPTResult({
  mdTitle,
  mdContent,
}: {
  mdTitle: string;
  mdContent: string;
}) {
  const [title, setTitle] = useState(mdTitle);
  const [safeHtml, setSafeHtml] = useState<string>("");
  useEffect(() => {
    const cleanTitle = mdTitle.replace(/^#+\s*/, "").trim();
    setTitle(cleanTitle);

    const run = async () => {
      const normalizedContent = mdContent.replace(/\\n/g, "\n");
      const html = await marked.parse(normalizedContent);
      const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });
      setSafeHtml(clean);
    };
    run();
  }, [mdTitle, mdContent]);
  return (
    <S.ResultContainer>
      <S.ResultTitleWrap>
        <S.ResultTitleBox>
          <S.ResultTitle>홍보글 생성 완료</S.ResultTitle>
          <S.ResultDescription>
            완성된 홍보글을 복사하거나 수정 요청을 남겨보세요!
          </S.ResultDescription>
        </S.ResultTitleBox>
        <S.ButtonWrap>
          <S.ButtonBox>
            <S.ButtonText>복사</S.ButtonText>
          </S.ButtonBox>
          <S.ButtonBox>
            <S.ButtonText>공유</S.ButtonText>
          </S.ButtonBox>
        </S.ButtonWrap>
      </S.ResultTitleWrap>
      <S.ChatWrapper>
        <S.ChatTitleBox>
          <S.ChatTitle>{title}</S.ChatTitle>
        </S.ChatTitleBox>
        <S.ChatContentBox>
          <S.ChatContent dangerouslySetInnerHTML={{ __html: safeHtml }} />
        </S.ChatContentBox>
      </S.ChatWrapper>
      <S.ChatBox>
        <S.ChatBoxTop>
          <S.ChatBoxTopTitle>내용 수정 제안</S.ChatBoxTopTitle>
          <S.ChatBoxTopSend src={SendImg} alt="보내기" />
        </S.ChatBoxTop>
        <S.ChatBoxBottom
          placeholder={
            "수정하고 싶은 부분이 있다면 자유롭게 적어주세요!\n문장 표현, 정보 추가/삭제, 문체 변경 등 무엇이든 가능합니다 :)"
          }
        />
      </S.ChatBox>
    </S.ResultContainer>
  );
}
