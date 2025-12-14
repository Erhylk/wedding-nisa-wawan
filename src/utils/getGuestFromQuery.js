export function getGuestFromQuery() {
  const params = new URLSearchParams(window.location.search);

  return {
    name: params.get("to") || "Tamu Undangan",
    address: params.get("addr") || "Tempat",
  };
}
