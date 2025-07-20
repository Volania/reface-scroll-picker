export function getSearchParams() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}
