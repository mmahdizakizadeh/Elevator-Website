(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const storageKey = "arman-elevator-theme";

  let savedTheme = null;
  try { savedTheme = localStorage.getItem(storageKey); } catch (error) { /* Storage may be unavailable. */ }

  const preferredTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : preferredTheme;
  root.dataset.theme = initialTheme;

  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try { localStorage.setItem(storageKey, nextTheme); } catch (error) { /* Theme still works for this visit. */ }
    toggle.setAttribute("aria-label", nextTheme === "dark" ? "فعال‌کردن حالت روشن" : "فعال‌کردن حالت تاریک");
  });
})();
