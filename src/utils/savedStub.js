const SAVED = "saved_articles";

// returnează articolele salvate din localStorage
export function getSaved() {
  try {
    return JSON.parse(localStorage.getItem(SAVED) || "[]");
  } catch {
    return [];
  }
}

// verifică dacă articolul e deja salvat
export function isSaved(url) {
  return getSaved().some(a => a.url === url);
}

// adaugă un articol nou în localStorage
export function saveArticle(article) {
  const list = getSaved();
  if (!list.some(a => a.url === article.url)) {
    list.push({ ...article, _id: crypto.randomUUID() });
    localStorage.setItem(SAVED, JSON.stringify(list));
  }
  return list;
}

// șterge un articol salvat
export function deleteArticle(url) {
  const list = getSaved().filter(a => a.url !== url);
  localStorage.setItem(SAVED, JSON.stringify(list));
  return list;
}