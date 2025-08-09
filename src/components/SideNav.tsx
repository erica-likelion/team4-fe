import * as S from "../styles/component/SideNav.styles";

export default function SideNav() {
  return (
    <S.SideNavContainer>
      <S.SideNavWrapper>
        <S.SideNavTitleWrap>
          <S.SideNavTitleImage />
          <S.SideNavTitle>홍보봇</S.SideNavTitle>
        </S.SideNavTitleWrap>
      </S.SideNavWrapper>
    </S.SideNavContainer>
  );
}
