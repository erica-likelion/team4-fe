import * as S from "../styles/component/ModalTip1.styles";
import Tip1 from "../assets/tip3-1.svg";
import Tip2 from "../assets/tip3-2.svg";
import Tip3 from "../assets/tip3-3.svg";

export default function ModalTip3() {
  return (
    <S.ModalTip1Container>
      <S.Title>1. My Page를 누릅니다.</S.Title>
      <img src={Tip1} alt="Tip 1" />
      <S.Title>2. 기록 보기를 누릅니다.</S.Title>
      <img src={Tip2} alt="Tip 2" />
      <S.Title>
        3. 나의 AI 홍보글 목록에서 지금까지 생성한 홍보글을 볼 수 있습니다.
      </S.Title>
      <S.Title>
        4. 이 중 하나를 누르면 다음과 같은 창에서 공유 버튼을 눌러 공유가
        가능합니다
      </S.Title>
      <img src={Tip3} alt="Tip 3" />
      <S.Title>
        5. 제작하기 버튼을 눌러 제공된 데이터를 토대로 AI가 홍보글을
        만들어줍니다.
      </S.Title>
      <S.Title>
        6. 복사와 공유 버튼을 통해, 글을 복사하거나 커뮤니티에 공유할 수
        있습니다.
      </S.Title>
    </S.ModalTip1Container>
  );
}
