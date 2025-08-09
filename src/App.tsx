import styled from "styled-components"; //styled-components 라이브러리 import
import SideNav from "./components/SideNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MyPage } from "./pages/MyPage";
import { DashBoard } from "./pages/DashBoard";
import { Create } from "./pages/Create";
import { Community } from "./pages/Community";

/**
 * styled-components를 사용하여 스타일링
 * 형식은 다음과 같이 const 이름명 = styled.태그명`{ 스타일 속성 -> css랑 비슷하게 작성 }`;
 * 사용할 때는 태그를 이름명으로 대체
 */
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <SideNav />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
