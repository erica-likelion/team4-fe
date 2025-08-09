import styled from "styled-components";
import CharacterSvg from "../../assets/character.svg";
import DashBoardSvg_Un from "../../assets/dashboard_un.svg";
import DashBoardSvg_On from "../../assets/dashboard_on.svg";
import CreateSvg_Un from "../../assets/create_un.svg";
import CreateSvg_On from "../../assets/create_on.svg";
import CommunitySvg_Un from "../../assets/community_un.svg";
import CommunitySvg_On from "../../assets/community_on.svg";
import MyPageSvg_Un from "../../assets/person_un.svg";
import MyPageSvg_On from "../../assets/person_on.svg";

export const SideNavContainer = styled.div`
  width: 120px;
  height: 100%;
  background-color: #f2f2f2;
  border-right: 1px solid #bdbdbd;
`;

export const SideNavWrapper = styled.div`
  padding-top: 30px;
  gap: 30px;
`;

export const SideNavTitleWrap = styled.div`
  list-style-type: none;
  padding: 0;
`;

export const SideNavTitleImage = styled(CharacterSvg)`
  width: 34px;
  height: 34px;
`;

export const SideNavTitle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #f35400;
`;

export const SideNavItemBox = styled.div`
  display: flex;
  width: 65px;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const SideNavItemDashBoard_Un = styled(DashBoardSvg_Un)`
  width: 30px;
  height: 30px;
`;

export const SideNavItemDashBoard_On = styled(DashBoardSvg_On)`
  width: 30px;
  height: 30px;
`;

export const SideNavItemCreate_Un = styled(CreateSvg_Un)`
  width: 30px;
  height: 30px;
`;

export const SideNavItemCommunity_Un = styled(CommunitySvg_Un)`
  width: 30px;
  height: 30px;
`;

export const SideNavItemCreate_On = styled(CreateSvg_On)`
  width: 30px;
  height: 30px;
`;

export const SideNavItemCommunity_On = styled(CommunitySvg_On)`
  width: 30px;
  height: 30px;
`;

export const SideNavItemMyPage_Un = styled(MyPageSvg_Un)`
  width: 30px;
  height: 30px;
`;

export const SideNavItemMyPage_On = styled(MyPageSvg_On)`
  width: 30px;
  height: 30px;
`;
