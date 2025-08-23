import * as S from "../styles/component/ModalTip1.styles";
import Tip1 from "../assets/tip1-1.svg";
import Tip2 from "../assets/tip1-2.svg";
import Tip3 from "../assets/tip1-3.svg";
import Tip4 from "../assets/tip1-4.svg";
import Tip5 from "../assets/tip1-5.svg";
import Tip6 from "../assets/tip1-6.svg";

export default function ModalTip1() {
  return (
    <S.ModalTip1Container>
      <S.Title>1. AI Create 페이지로 이동합니다.</S.Title>
      <img src={Tip1} alt="Tip 1" />
      <S.Title>
        2. 만들고 싶은 홍보글의 소스가 되는 사진을 업로드합니다.
      </S.Title>
      <img src={Tip2} alt="Tip 2" />
      <S.Title>3. 홍보글 맨 아래에 들어갈 해시태그를 입력합니다.</S.Title>
      <img src={Tip3} alt="Tip 3" />
      <S.Title>4. AI한테 요청할 프롬프트를 입력해줍니다.</S.Title>
      <img src={Tip4} alt="Tip 4" />
      <S.Title>
        5. 제작하기 버튼을 눌러 제공된 데이터를 토대로 AI가 홍보글을
        만들어줍니다.
      </S.Title>
      <img src={Tip5} alt="Tip 5" />
      <S.Title>
        6. 복사와 공유 버튼을 통해, 글을 복사하거나 커뮤니티에 공유할 수
        있습니다.
      </S.Title>
      <img src={Tip6} alt="Tip 6" />
    </S.ModalTip1Container>
  );
}
