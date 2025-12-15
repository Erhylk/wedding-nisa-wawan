export const formatWeddingDate = (date) => {
  const weddingDate = new Date(date);
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(weddingDate);
};

export const formatSimpleWeddingDate = (date) => {
  const weddingDate = new Date(date);
  return weddingDate
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\//g, ".");
};
