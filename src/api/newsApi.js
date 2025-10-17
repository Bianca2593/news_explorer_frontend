const ENDPOINT =
  import.meta.env.MODE === "production"
    ? (import.meta.env.VITE_NEWS_API_URL_PROD ||
       "https://nomoreparties.co/news/v2/everything")
    : (import.meta.env.VITE_NEWS_API_URL_DEV ||
       "https://newsapi.org/v2/everything");

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function ensureJson(res) {
  const ct = res.headers.get("content-type") || "";
  if (!res.ok) {
    return res.text().then((t) =>
      Promise.reject(new Error(`HTTP ${res.status}: ${t.slice(0,180)}`))
    );
  }
  if (!ct.includes("application/json")) {
    return res.text().then((t) =>
      Promise.reject(new Error(`Expected JSON, got ${ct}. First bytes: ${t.slice(0,180)}`))
    );
  }
  return res.json();
}

/** Search last 7 days. Always returns [] on error for safe rendering. */
export async function searchNews(query) {
  const q = (query || "").trim();
  if (!q || !API_KEY) return [];

  const now = new Date();
  const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const url = new URL(ENDPOINT);
  url.searchParams.set("q", q);
  url.searchParams.set("from", from.toISOString());
  url.searchParams.set("to", now.toISOString());
  url.searchParams.set("pageSize", "100");
  url.searchParams.set("language", "en");
  url.searchParams.set("sortBy", "publishedAt");
  url.searchParams.set("apiKey", API_KEY);

  try {
    const data = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
      mode: "cors",
    }).then(ensureJson);

    return Array.isArray(data.articles) ? data.articles : [];
  } catch (e) {
    console.error("News API error:", e.message || e);
    return [];
  }
}