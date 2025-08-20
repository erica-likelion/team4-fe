import { useMemo, useState } from "react";
import * as S from "../styles/pages/Community.styles";
import { Card } from "../components/Card";

import searchBarUrl from "../assets/searchbar.svg";
import searchIconUrl from "../assets/search.svg";

export function Community() {
  const [query, setQuery] = useState("");

  const items = useMemo(() => Array.from({ length: 28 }), []);

  const onSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
  };

  return (
    <S.Container>
      <S.Top>
        <S.SearchForm onSubmit={onSubmit}>
          <S.SearchBarSprite $bg={searchBarUrl}>
            <S.SearchIcon src={searchIconUrl} alt="검색" />
            <S.SearchInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="찾고 싶은 홍보물을 검색하세요"
              aria-label="홍보물 검색"
            />
          </S.SearchBarSprite>
        </S.SearchForm>

        <S.ShareButton type="button">
          <span className="plus">＋</span>
          <span>내 홍보물 공유</span>
        </S.ShareButton>
      </S.Top>

      <S.Grid>
        {items.map((_, i) => (
          <S.GridItem key={i}>
            <Card />
          </S.GridItem>
        ))}
      </S.Grid>
    </S.Container>
  );
}

export default Community;
