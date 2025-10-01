const BASE_URL = import.meta.env.VITE_NEWS_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

/**
 * Returnează articole de știri pentru query pe ultimele 7 zile.
 */
export async function searchNews(query) {
  const q = (query || "").trim();
  if (!q) return [];

  // interval: ultimele 7 zile
  const now = new Date();
  const from = new Date();
  from.setDate(now.getDate() - 7);

  const params = new URLSearchParams({
    q: q,
    from: from.toISOString().slice(0, 10),
    to: now.toISOString().slice(0, 10),
    language: "en",
    sortBy: "publishedAt",
    pageSize: "100",
  });

  if (API_KEY) params.set("apiKey", API_KEY);

  const url = `${BASE_URL}?${params.toString()}`;
  console.log("Fetching:", url);

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("News API HTTP error:", res.status);
      try {
        const err = await res.json();
        console.error("Error payload:", err);
      } catch {}
      return [];
    }
    const data = await res.json();
    return Array.isArray(data.articles) ? data.articles : [];
  } catch (e) {
    console.error("News API fetch failed:", e);
    return [];
  }
}