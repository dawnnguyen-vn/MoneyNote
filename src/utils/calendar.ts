export const formatDate = (date: Date) => {
  const day = formatNumber(date.getDate());
  const month = formatNumber(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const convertDatetoString = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}/${month}/${day}`;
};

export const convertStringToDate = (date: string) => {
  let parts = date.split("/");
  return new Date(+parts[0], +parts[1] - 1, +parts[2]);
};

const formatNumber = (number: number) => {
  return ("0" + number).slice(-2);
};

export const formatShortWeekday = (locale: string | undefined, date: Date) =>
  ["CN", "T.2", "T.3", "T.4", "T.5", "T.6", "T.7"][date.getDay()];
