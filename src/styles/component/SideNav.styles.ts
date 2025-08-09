import styled from "styled-components";

export const SideNavContainer = styled.div`
  width: 120px;
  min-height: 100%;
  background-color: #f2f2f2;
  border-right: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
`;

export const SideNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  gap: 30px;
`;

export const SideNavTitleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const SideNavTitleImage = styled.img`
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
  cursor: pointer;
`;

export const SideNavItemImage_Un = styled.img`
  width: 30px;
  height: 30px;
`;

export const SideNavItemImage_On = styled.img`
  width: 30px;
  height: 30px;
`;

export const SideNavItemTitle = styled.p<{ selected: boolean }>`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => (props.selected ? "#f35400" : "#001d3d")};
`;
