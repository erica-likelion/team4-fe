import { useEffect, useMemo, useState, useRef, useId } from "react";
import * as S from "../styles/pages/MyPage.styles";
import tabsInfoOn from "../assets/mypage_info.svg";
import tabsLogsOn from "../assets/mypage_logs.svg";
import { motion } from "framer-motion";
import axios from "axios";

type Form = {
  name: string;
  type: string;
  oneLiner: string;
  location: string;
  open: string;
  close: string;
  lastOrder: string;
  holiday: string;
};

const DEFAULT_FORM: Form = {
  name: "스타벅스",
  type: "카페",
  oneLiner: "바닷가 감성을 담은 여름 시즌 한정 카페",
  location: "안산시 상록구 000-000000",
  open: "10:00",
  close: "21:00",
  lastOrder: "20:30",
  holiday: "연중무휴",
};

const ONE_LINER_MAX = 30;
const LS_FORM = "mypage_form_v2";
const LS_PROFILE = "mypage_profile_v2";
const LS_MENU = "mypage_menu_v2";
const LS_AMENITIES = "mypage_amenities_v1";

type Img = { file?: File; url: string };

interface Promotion {
  id: number;
  title: string;
  date: string;
  image: string;
  likeCount: number;
  storeName: string;
  storeLocation: string;
}

interface MyInfo {
  storeId: number;
  storeName: string;
  storeImage: string;
  information: string;
  location: string;
  businessType: string;
  openTime: number;
  closeTime: number;
  closedDays: string;
  reservation: boolean;
  menu: string;
  count: number;
  convenience: {
    wifi: boolean;
    outlet: boolean;
    pet: boolean;
    packagingDelivery: boolean;
  };
}

export function MyPage() {
  const [activeTab, setActiveTab] = useState<"info" | "logs">("info");
  const [form, setForm] = useState<Form>(DEFAULT_FORM);
  const [profile, setProfile] = useState<Img | null>(null);
  const [menuImages, setMenuImages] = useState<Img[]>([]);
  const [myPromotion, setMyPromotion] = useState<Promotion[] | null>(null);
  const amenitiesAll = [
    "Wifi 제공",
    "콘센트 사용 가능",
    "노트북 사용 가능 좌석",
    "반려동물 동반 가능",
    "핸드폰 충전 가능",
    "주차 가능",
    "유모차 출입 가능",
    "예약 가능",
  ];
  const [amenities, setAmenities] = useState<string[]>(amenitiesAll);
  const [myInfo, setMyInfo] = useState<MyInfo | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputId = useId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.34.142.160:8080/api/dashboard/stores/1"
        );
        setMyInfo(response.data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.34.142.160:8080/api/community/stores/1/promotions"
        );
        setMyPromotion(response.data);
      } catch (error) {
        console.error("Error fetching promotions data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(
          "http://3.34.142.160:8081/api/dashboard/stores/22"
        );
        setMyInfo(response.data);
      } catch (error) {
        console.error("Error fetching store data:", error);
      }
    };
    fetchStoreData();
  }, []);

  // 저장/로드
  useEffect(() => {
    try {
      const f = localStorage.getItem(LS_FORM);
      const p = localStorage.getItem(LS_PROFILE);
      const m = localStorage.getItem(LS_MENU);
      const a = localStorage.getItem(LS_AMENITIES);
      if (f) setForm(JSON.parse(f));
      if (p && !p.startsWith("blob:")) setProfile({ url: p }); // blob 저장 무시
      if (m)
        setMenuImages((JSON.parse(m) as string[]).map((u) => ({ url: u })));
      if (a) setAmenities(JSON.parse(a));
    } catch {}
  }, []);

  // 자동 저장 (디바운스 300ms)
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem(LS_FORM, JSON.stringify(form));
        const safeProfileUrl =
          profile?.url && !profile.url.startsWith("blob:") ? profile.url : "";
        localStorage.setItem(LS_PROFILE, safeProfileUrl);
        localStorage.setItem(
          LS_MENU,
          JSON.stringify(menuImages.map((i) => i.url))
        );
        localStorage.setItem(LS_AMENITIES, JSON.stringify(amenities));
      } catch {}
    }, 300);
    return () => clearTimeout(t);
  }, [form, profile?.url, menuImages, amenities]);

  const onChange =
    (key: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onPickProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setProfile((prev) => {
      if (prev?.file) URL.revokeObjectURL(prev.url);
      const url = URL.createObjectURL(f);
      return { file: f, url };
    });
  };

  const toggleAmenity = (label: string) => {
    setAmenities((prev) =>
      prev.includes(label) ? prev.filter((v) => v !== label) : [...prev, label]
    );
  };

  const oneLinerCount = useMemo(
    () => `${Math.min(form.oneLiner.length, ONE_LINER_MAX)}/${ONE_LINER_MAX}`,
    [form.oneLiner]
  );

  useEffect(() => {
    return () => {
      if (profile?.file) URL.revokeObjectURL(profile.url);
      menuImages.forEach((m) => {
        if (m.file) URL.revokeObjectURL(m.url);
      });
    };
  }, [profile, menuImages]);

  const isProfileEmpty = !profile?.url;

  const col1 = amenitiesAll.slice(0, 4);
  const col2 = amenitiesAll.slice(4, 8);
  const isInfo = activeTab === "info";

  return activeTab === "info" ? (
    <S.InfoPage>
      <S.InfoInner>
        <S.TabRow style={{ marginTop: 46, marginLeft: "calc(141px - 292px)" }}>
          <S.TabsSprite
            as={motion.div}
            $bg={activeTab === "info" ? tabsInfoOn : tabsLogsOn}
            role="tablist"
            aria-label="My Page tabs"
            style={{ width: 250, height: 48 }}
          >
            <S.TabHitInfo
              as={motion.button}
              role="tab"
              aria-selected={activeTab === "info"}
              aria-label="나의 정보"
              onClick={() => setActiveTab("info")}
            />
            <S.TabHitLogs
              role="tab"
              aria-selected={!isInfo}
              aria-label="기록 보기"
              onClick={() => setActiveTab("logs")}
            />
          </S.TabsSprite>
        </S.TabRow>

        <S.InfoArtboard>
          <S.InfoWrapper>
            <S.InfoCard>
              <S.InfoHead>내 가게 정보</S.InfoHead>
              <S.Divider />
              <S.InfoBody>
                <S.Row $mb={60}>
                  <S.Label>상호명</S.Label>
                  <S.Value>
                    <S.Input
                      value={myInfo?.storeName}
                      onChange={onChange("name")}
                    />
                  </S.Value>
                </S.Row>

                <S.Row $mb={60}>
                  <S.Label>업종</S.Label>
                  <S.Value>
                    <S.Input value={"카페"} onChange={onChange("type")} />
                  </S.Value>
                </S.Row>

                <S.Row $alignTop $mb={36.5}>
                  <S.Label>프로필 이미지</S.Label>
                  <S.Value>
                    <S.Profile>
                      <S.ProfileIcon160
                        $empty={isProfileEmpty}
                        htmlFor={fileInputId}
                      >
                        {!isProfileEmpty ? (
                          <S.ProfileImg
                            key={profile!.url}
                            src={myInfo?.storeImage}
                            alt=""
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : null}
                      </S.ProfileIcon160>
                      <input
                        id={fileInputId}
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={onPickProfile}
                      />
                    </S.Profile>
                  </S.Value>
                </S.Row>

                <S.Row $alignTop $mb={50.5}>
                  <S.Label>한 줄 소개</S.Label>
                  <S.Value>
                    <S.OneLinerWrap>
                      <S.OneLiner
                        maxLength={ONE_LINER_MAX}
                        value={myInfo?.information}
                        onChange={onChange("oneLiner")}
                        placeholder="바닷가 감성을 담은 여름 시즌 한정 카페"
                      />
                      <S.Counter>{oneLinerCount}</S.Counter>
                    </S.OneLinerWrap>
                  </S.Value>
                </S.Row>

                <S.Row $mb={49}>
                  <S.Label>위치</S.Label>
                  <S.Value>
                    <S.Input
                      value={myInfo?.location}
                      onChange={onChange("location")}
                      placeholder="주소를 입력하세요"
                      style={{ width: "100%" }}
                    />
                  </S.Value>
                </S.Row>

                <S.Row $mb={49}>
                  <S.Label>영업 시간</S.Label>
                  <S.Value>
                    <S.TimeLine>
                      <span className="label">매일</span>

                      <S.TimeInput
                        value={`${myInfo?.openTime}:00`}
                        onChange={onChange("open")}
                        placeholder="10:00"
                        size={Math.max(form.open.length, 4)}
                      />
                      <span className="sep">~</span>

                      <S.TimeInput
                        value={`${myInfo?.closeTime}:00`}
                        onChange={onChange("close")}
                        placeholder="21:00"
                        size={Math.max(form.close.length, 4)}
                      />

                      <span className="lp">(라스트 오더</span>

                      <S.TimeInput
                        value={form.lastOrder}
                        onChange={onChange("lastOrder")}
                        placeholder="20:30"
                        size={Math.max(form.lastOrder.length, 4)}
                      />
                      <span className="rp">)</span>
                    </S.TimeLine>
                  </S.Value>
                </S.Row>

                <S.Row>
                  <S.Label>휴무일</S.Label>
                  <S.Value>
                    <S.Input
                      value={myInfo?.closedDays}
                      onChange={onChange("holiday")}
                      placeholder="연중무휴"
                    />
                  </S.Value>
                </S.Row>
              </S.InfoBody>
            </S.InfoCard>
          </S.InfoWrapper>

          <S.AmenityWrapper>
            <S.AmenityCard>
              <S.AmenityHead>편의 시설</S.AmenityHead>
              <S.Divider />
              <S.AmenityBody>
                <S.AmenityCols>
                  <S.AmenityColLeft>
                    {col1.map((label) => {
                      const checked = amenities.includes(label);
                      return (
                        <S.Amenity key={label}>
                          <S.Checkbox
                            checked={checked}
                            onChange={() => toggleAmenity(label)}
                          />
                          <span>{label}</span>
                        </S.Amenity>
                      );
                    })}
                  </S.AmenityColLeft>

                  <S.AmenityColRight>
                    {col2.map((label) => {
                      const checked = amenities.includes(label);
                      return (
                        <S.Amenity key={label}>
                          <S.Checkbox
                            checked={checked}
                            onChange={() => toggleAmenity(label)}
                          />
                          <span>{label}</span>
                        </S.Amenity>
                      );
                    })}
                  </S.AmenityColRight>
                </S.AmenityCols>
              </S.AmenityBody>
            </S.AmenityCard>
          </S.AmenityWrapper>
        </S.InfoArtboard>
      </S.InfoInner>
    </S.InfoPage>
  ) : (
    <S.LogsPage>
      <S.LogsInner>
        <S.TabRow style={{ marginTop: 46, marginLeft: "calc(141px - 292px)" }}>
          <S.TabsSprite
            $bg={isInfo ? tabsInfoOn : tabsLogsOn}
            role="tablist"
            aria-label="My Page tabs"
            style={{ width: 250, height: 48 }}
          >
            <S.TabHitInfo
              role="tab"
              aria-selected={isInfo} // ✅ 비교 대신 불린 사용
              aria-label="나의 정보"
              onClick={() => setActiveTab("info")}
            />
            <S.TabHitLogs
              role="tab"
              aria-selected={!isInfo} // ✅ 반대 불린
              aria-label="기록 보기"
              onClick={() => setActiveTab("logs")}
            />
          </S.TabsSprite>
        </S.TabRow>

        <S.LogsArtboard>
          <S.LogsWrapper>
            {/* 저장 목록 */}
            <S.SavedListCard>
              <S.LogsHead>저장 목록</S.LogsHead>
              <S.Divider />
              <S.SavedBody>
                <S.SavedGrid>
                  {myPromotion?.map((promotion, i) => (
                    <S.SavedCard key={i}>
                      <S.SavedThumb />
                      <S.SavedMeta>
                        <S.SavedBrandThumb />
                        <span className="brand">{promotion?.storeName}</span>

                        <span className="right">
                          <span className="group">
                            <S.MetaIcon $type="heart" />
                            <span>{promotion?.likeCount}</span>
                          </span>
                          <span className="group">
                            <S.MetaIcon $type="eye" />
                            <span>612</span>
                          </span>
                        </span>
                      </S.SavedMeta>
                    </S.SavedCard>
                  ))}
                </S.SavedGrid>
              </S.SavedBody>
            </S.SavedListCard>

            {/* 나의 AI 홍보글 목록 */}
            <S.ArticlesListCard>
              <S.LogsHead>나의 AI 홍보글 목록</S.LogsHead>
              <S.Divider />
              <S.ArticlesBody>
                <S.ArticlesViewport>
                  <S.ArticleList>
                    {myPromotion?.map((promotion) => (
                      <S.ArticleItem key={promotion.id}>
                        <S.ArticleThumb />
                        <S.ArticleTitle>{promotion.title}</S.ArticleTitle>
                        <S.ArticleTime>{promotion.date}</S.ArticleTime>
                      </S.ArticleItem>
                    ))}
                  </S.ArticleList>
                </S.ArticlesViewport>
              </S.ArticlesBody>
            </S.ArticlesListCard>
          </S.LogsWrapper>
        </S.LogsArtboard>
      </S.LogsInner>
    </S.LogsPage>
  );
}
