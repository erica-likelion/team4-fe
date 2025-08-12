import * as S from "../styles/component/GPTResult.styles";
import SendImg from "../assets/send.svg";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

export default function GPTResult() {
  const mdTitle = `## ☕ 바쁜 하루 속 여유를 찾다 - 스타벅스 안산점 방문기`;
  const mdContent = `
요즘처럼 하루하루가 빠르게 지나갈수록, 잠깐이라도 멈춰 숨 고를 수 있는 공간이 더 간절하게 느껴집니다.

### 📍 위치 & 첫인상
안산 중심에서 만나는 아늑함. 접근성이 좋고, 내부는 고급스러운 우드톤 인테리어와 부드러운 조명으로 따뜻한 분위기를 자아냅니다.

- 창가석에서 햇살 받으며 독서
- 깊숙한 자리에서 집중 공부
- 전원 콘센트 多

### 🪑 좌석 구성 – 혼자 와도, 여럿이 와도 완벽
이 지점은 좌석 구성이 정말 잘 되어 있어요. 창가석에서는 햇살을 받으며 여유롭게 독서나 노트북 작업을 하기 좋고, 내부 깊숙한 곳에는 조용하게 공부하거나 회의를 할 수 있는 공간이 따로 있어요.

1. 2인용 테이블
2. 4인용 테이블
3. 단체석
4. 바 테이블

### 🛍 굿즈 천국 – Starbucks at Home Zone
입구 쪽 한 켠에는 스타벅스 굿즈 존이 마련되어 있어요. 텀블러, 머그컵, 드립백, 원두, 티 컬렉션, 에코백, 시즌 한정 굿즈까지 가득합니다.

> **추천템**: 여름 한정 아이스 전용 텀블러, 콜드브루 원두 파우치

### 🍽 메뉴 – 푸드도 음료도 완벽
커피는 당연히 맛있지만, 푸드 메뉴도 정말 알찹니다. 최근에는 달콤한 크림과 진한 초콜릿이 어우러진 시즌 한정 음료가 인기예요.

---

(이후 내용이 계속 반복된다 가정)
`;
  const [title, setTitle] = useState("");
  const [safeHtml, setSafeHtml] = useState<string>("");
  useEffect(() => {
    const cleanTitle = mdTitle.replace(/^#+\s*/, "").trim();
    setTitle(cleanTitle);

    const run = async () => {
      const html = await marked.parse(mdContent);
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
