const KEY = "demo_token";

// simulează logarea (oricine se poate loga)
export function loginStub(email, password) {
  localStorage.setItem(KEY, "stub-token");
  return Promise.resolve({ token: "stub-token", name: email.split("@")[0] });
}

// șterge "tokenul" la logout
export function logoutStub() {
  localStorage.removeItem(KEY);
}

// verifică dacă "userul" e logat
export function isLoggedIn() {
  return !!localStorage.getItem(KEY);
}