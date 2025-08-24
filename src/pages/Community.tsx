import { useMemo, useState } from "react";
import * as S from "../styles/pages/Community.styles";
import { Card } from "../components/Card";
import { AnimatePresence } from "framer-motion";
import searchIconUrl from "../assets/search.svg";
import Modal from "../components/Modal";
import { MOCK_PROMOTIONS, Promotion } from "../constants/promotion";

export function Community() {
  const [query, setQuery] = useState("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion>(
    MOCK_PROMOTIONS[0]
  );
  const filteredPromotions = useMemo(() => {
    if (!query.trim()) return MOCK_PROMOTIONS;
    return MOCK_PROMOTIONS.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <S.Container>
      <S.Top>
        <S.SearchForm>
          <S.SearchBarSprite>
            <S.SearchIcon src={searchIconUrl} alt="검색" />
            <S.SearchInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("검색어: " + query);
                }
              }}
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
        {filteredPromotions.map((promotion) => (
          <S.GridItem key={promotion.id}>
            <Card
              data={promotion}
              onClick={() => {
                setSelectedPromotion(promotion);
                setIsModalVisible(true);
              }}
            />
          </S.GridItem>
        ))}
      </S.Grid>
      {isModalVisible && (
        <AnimatePresence>
          <Modal
            setIsModalVisible={setIsModalVisible}
            promotion={selectedPromotion}
          />
        </AnimatePresence>
      )}
    </S.Container>
  );
}

export default Community;
