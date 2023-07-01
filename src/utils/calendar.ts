export const formatDate = (date: Date) => {
  const day = formatNumber(date.getDate());
  const month = formatNumber(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const formatNumber = (number: number) => {
  return ("0" + number).slice(-2);
};

export const formatShortWeekday = (locale: string | undefined, date: Date) =>
  ["CN", "T.2", "T.3", "T.4", "T.5", "T.6", "T.7"][date.getDay()];
