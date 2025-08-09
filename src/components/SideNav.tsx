import * as S from "../styles/component/SideNav.styles";
import CharacterSvg from "../assets/character.svg";
import DashBoardSvg_Un from "../assets/dashboard_un.svg";
import DashBoardSvg_On from "../assets/dashboard_on.svg";
import CreateSvg_Un from "../assets/create_un.svg";
import CreateSvg_On from "../assets/create_on.svg";
import CommunitySvg_Un from "../assets/community_un.svg";
import CommunitySvg_On from "../assets/community_on.svg";
import MyPageSvg_Un from "../assets/person_un.svg";
import MyPageSvg_On from "../assets/person_on.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SideNav() {
  const [selectedItem, setSelectedItem] = useState<string | null>("dashboard");
  const navigate = useNavigate();

  const handleItemClick = (item: string) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <S.SideNavContainer>
      <S.SideNavWrapper>
        <S.SideNavTitleWrap>
          <S.SideNavTitleImage src={CharacterSvg} />
          <S.SideNavTitle>홍보봇</S.SideNavTitle>
        </S.SideNavTitleWrap>
        {/* 대시보드 */}
        <S.SideNavItemBox
          onClick={() => {
            handleItemClick("dashboard");
            navigate("/");
          }}
        >
          <S.SideNavItemImage_Un
            src={
              selectedItem === "dashboard" ? DashBoardSvg_On : DashBoardSvg_Un
            }
            alt="대시보드 아이콘"
          />
          <S.SideNavItemTitle selected={selectedItem === "dashboard"}>
            Dash Board
          </S.SideNavItemTitle>
        </S.SideNavItemBox>

        {/* AI Create */}
        <S.SideNavItemBox
          onClick={() => {
            handleItemClick("create");
            navigate("/create");
          }}
        >
          <S.SideNavItemImage_Un
            src={selectedItem === "create" ? CreateSvg_On : CreateSvg_Un}
            alt="크리에이트 아이콘"
          />
          <S.SideNavItemTitle selected={selectedItem === "create"}>
            AI Create
          </S.SideNavItemTitle>
        </S.SideNavItemBox>

        {/* Community */}
        <S.SideNavItemBox
          onClick={() => {
            handleItemClick("community");
            navigate("/community");
          }}
        >
          <S.SideNavItemImage_Un
            src={
              selectedItem === "community" ? CommunitySvg_On : CommunitySvg_Un
            }
            alt="커뮤니티 아이콘"
          />
          <S.SideNavItemTitle selected={selectedItem === "community"}>
            Community
          </S.SideNavItemTitle>
        </S.SideNavItemBox>

        {/* My Page */}
        <S.SideNavItemBox
          onClick={() => {
            handleItemClick("myPage");
            navigate("/my");
          }}
        >
          <S.SideNavItemImage_Un
            src={selectedItem === "myPage" ? MyPageSvg_On : MyPageSvg_Un}
            alt="마이페이지 아이콘"
          />
          <S.SideNavItemTitle selected={selectedItem === "myPage"}>
            My Page
          </S.SideNavItemTitle>
        </S.SideNavItemBox>
      </S.SideNavWrapper>
    </S.SideNavContainer>
  );
}
