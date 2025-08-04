import styled from "styled-components"; //styled-components 라이브러리 import

/**
 * styled-components를 사용하여 스타일링
 * 형식은 다음과 같이 const 이름명 = styled.태그명`{ 스타일 속성 -> css랑 비슷하게 작성 }`;
 * 사용할 때는 태그를 이름명으로 대체
 */
const Title = styled.h1`
  font-size: 2rem;
  color: #4caf50;
`;

function App() {
  return (
    <div>
      <Title>Hello Styled Components!</Title> {/* Title 스타일 변수 사용 */}
    </div>
  );
}

export default App;
