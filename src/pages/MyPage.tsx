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

type Promotion = {
  id: number;
  title?: string;
  content?: string;
  createdAt?: string;
};

type MyInfoApi = {
  storeId: number;
  storeName: string;
  storeImage?: string;
  information?: string;
  location?: string;
  storeTime?: number;
  closedDays?: string;
  reservation?: boolean;
  menu?: string;
  count?: number;
  convenience?: {
    wifi?: boolean;
    outlet?: boolean;
    pet?: boolean;
    packagingDelivery?: boolean;
  };
};

const timeFromNow = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 60) return `${Math.floor(diff)}초 전`;
  if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
  return `${Math.floor(diff / 86400)}일 전`;
};

const toHHMM = (n?: number) => {
  if (typeof n !== "number" || isNaN(n)) return undefined;
  const s = n.toString().padStart(4, "0");
  return `${s.slice(0, 2)}:${s.slice(2)}`;
};

const mapApiToForm = (api: MyInfoApi, prev: Form): Form => ({
  name: api.storeName ?? prev.name,
  type: prev.type,
  oneLiner: api.information ?? prev.oneLiner,
  location: api.location ?? prev.location,
  open: toHHMM(api.storeTime) ?? prev.open,
  close: prev.close,
  lastOrder: prev.lastOrder,
  holiday: api.closedDays ?? prev.holiday,
});

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

export function MyPage() {
  const [activeTab, setActiveTab] = useState<"info" | "logs">("info");
  const [form, setForm] = useState<Form>(DEFAULT_FORM);
  const [profile, setProfile] = useState<Img | null>(null);
  const [menuImages, setMenuImages] = useState<Img[]>([]);
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

  const [myPromotion, setMyPromotion] = useState<Promotion[]>([]);
  const [promoLoading, setPromoLoading] = useState(true);
  const [promoError, setPromoError] = useState<unknown>(null);

  const [infoLoading, setInfoLoading] = useState(true);
  const [infoError, setInfoError] = useState<unknown>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputId = useId();

  useEffect(() => {
    try {
      const f = localStorage.getItem(LS_FORM);
      const p = localStorage.getItem(LS_PROFILE);
      const m = localStorage.getItem(LS_MENU);
      const a = localStorage.getItem(LS_AMENITIES);
      if (f) setForm(JSON.parse(f));
      if (p && !p.startsWith("blob:")) setProfile({ url: p });
      if (m) setMenuImages((JSON.parse(m) as string[]).map((u) => ({ url: u })));
      if (a) setAmenities(JSON.parse(a));
    } catch {}
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setPromoLoading(true);
        setPromoError(null);
        const { data } = await axios.get<any>(
          "http://3.34.142.160:8081/api/community/stores/1/promotions"
        );
        const raw = (data as any)?.data ?? data;
        const list = Array.isArray(raw) ? raw : [];
        if (mounted) setMyPromotion(list as Promotion[]);
      } catch (e) {
        if (mounted) setPromoError(e);
        console.error("Error fetching promotions data:", e);
      } finally {
        if (mounted) setPromoLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setInfoLoading(true);
        setInfoError(null);
        const { data } = await axios.get<any>(
          "http://3.34.142.160:8081/api/dashboard/stores/1"
        );
        const payload: MyInfoApi = (data?.data ?? data) as MyInfoApi;
        if (!mounted) return;
        if (payload && typeof payload === "object") {
          setForm((prev) => mapApiToForm(payload, prev));
        } else {
          throw new Error("Unexpected response shape for MyInfo");
        }
      } catch (e: any) {
        if (mounted) setInfoError(e);
        console.log("MYINFO_ERROR =>", {
          message: e?.message,
          status: e?.response?.status,
          data: e?.response?.data,
        });
      } finally {
        if (mounted) setInfoLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem(LS_FORM, JSON.stringify(form));
        const safeProfileUrl =
          profile?.url && !profile.url.startsWith("blob:") ? profile.url : "";
        localStorage.setItem(LS_PROFILE, safeProfileUrl);
        localStorage.setItem(LS_MENU, JSON.stringify(menuImages.map((i) => i.url)));
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
    () => `${Math.min((form.oneLiner ?? "").length, ONE_LINER_MAX)}/${ONE_LINER_MAX}`,
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

              {infoLoading ? (
                <div style={{ padding: 12 }}>내 정보 불러오는 중…</div>
              ) : infoError ? (
                <div style={{ padding: 12, color: "#c00" }}>
                  내 정보를 불러오는 중 오류가 발생했습니다.
                </div>
              ) : null}

              <S.InfoBody>
                <S.Row $mb={60}>
                  <S.Label>상호명</S.Label>
                  <S.Value>
                    <S.Input value={form.name ?? ""} onChange={onChange("name")} />
                  </S.Value>
                </S.Row>

                <S.Row $mb={60}>
                  <S.Label>업종</S.Label>
                  <S.Value>
                    <S.Input value={form.type ?? ""} onChange={onChange("type")} />
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
                            src={profile!.url}
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
                        value={form.oneLiner ?? ""}
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
                      value={form.location ?? ""}
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
                        value={form.open ?? ""}
                        onChange={onChange("open")}
                        placeholder="10:00"
                        size={Math.max((form.open ?? "").length, 4)}
                      />
                      <span className="sep">~</span>

                      <S.TimeInput
                        value={form.close ?? ""}
                        onChange={onChange("close")}
                        placeholder="21:00"
                        size={Math.max((form.close ?? "").length, 4)}
                      />

                      <span className="lp">(라스트 오더</span>

                      <S.TimeInput
                        value={form.lastOrder ?? ""}
                        onChange={onChange("lastOrder")}
                        placeholder="20:30"
                        size={Math.max((form.lastOrder ?? "").length, 4)}
                      />
                      <span className="rp">)</span>
                    </S.TimeLine>
                  </S.Value>
                </S.Row>

                <S.Row>
                  <S.Label>휴무일</S.Label>
                  <S.Value>
                    <S.Input
                      value={form.holiday ?? ""}
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
              aria-selected={isInfo}
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

        <S.LogsArtboard>
          <S.LogsWrapper>
            <S.SavedListCard>
              <S.LogsHead>저장 목록</S.LogsHead>
              <S.Divider />
              <S.SavedBody>
                <S.SavedGrid>
                  {Array.from({ length: 9 }).map((_, i) => (
                    <S.SavedCard key={i}>
                      <S.SavedThumb />
                      <S.SavedMeta>
                        <S.SavedBrandThumb />
                        <span className="brand">스타벅스</span>

                        <span className="right">
                          <span className="group">
                            <S.MetaIcon $type="heart" />
                            <span>26</span>
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

            <S.ArticlesListCard>
              <S.LogsHead>나의 AI 홍보글 목록</S.LogsHead>
              <S.Divider />
              <S.ArticlesBody>
                <S.ArticlesViewport>
                  {promoLoading ? (
                    <div style={{ padding: 16 }}>불러오는 중…</div>
                  ) : promoError ? (
                    <div style={{ padding: 16 }}>
                      데이터를 불러오는 중 문제가 발생했어요.
                    </div>
                  ) : myPromotion.length === 0 ? (
                    <div style={{ padding: 16 }}>등록된 홍보글이 없습니다.</div>
                  ) : (
                    <S.ArticleList>
                      {myPromotion.map((p: Promotion) => (
                        <S.ArticleItem key={p.id}>
                          <S.ArticleThumb />
                          <S.ArticleTitle>
                            {p.title || p.content || "(제목 없음)"}
                          </S.ArticleTitle>
                          <S.ArticleTime>{timeFromNow(p.createdAt)}</S.ArticleTime>
                        </S.ArticleItem>
                      ))}
                    </S.ArticleList>
                  )}
                </S.ArticlesViewport>
              </S.ArticlesBody>
            </S.ArticlesListCard>
          </S.LogsWrapper>
        </S.LogsArtboard>
      </S.LogsInner>
    </S.LogsPage>
  );
}
