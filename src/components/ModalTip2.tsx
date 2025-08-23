import * as S from "../styles/component/ModalTip1.styles";
import Tip1 from "../assets/tip2-1.svg";

export default function ModalTip2() {
  return (
    <S.ModalTip1Container>
      <S.Title>1. 편의시설 정보 등록/관리</S.Title>
      <S.SmallTitle>
        Tip: 제공하는 편의시설을 정확히 체크하면, AI가 홍보글에 관련
        문구·해시태그 (#와이파이, #콘센트 등)를 자동으로 반영합니다.
        와이파이·콘센트·반려동물 동반·주차·예약 가능 여부는 방문 결정에 큰
        영향을 줍니다. 변동이 있으면 바로 업데이트해 주세요.
      </S.SmallTitle>
      <img src={Tip1} alt="Tip 1" />
      <S.Title>2. 편의시설을 활용한 맞춤 문구 만들기</S.Title>
      <S.SmallTitle>
        Tip: 선택한 편의시설을 바탕으로 시간대/타깃에 맞춘 문구를 추천합니다. 예
        : “노트북 작업하기 좋은 좌석과 콘센트 넉넉!” / “반려동물 동반 가능,
        오늘은 같이 산책 후 커피 한 잔” / “전용 주차 가능, 주말 방문도 편하게”.
      </S.SmallTitle>
    </S.ModalTip1Container>
  );
}
