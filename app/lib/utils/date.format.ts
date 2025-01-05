export const convertDateFormat = (myDate: string, langauge: string): string => {
  const date = new Date(myDate);
  let formattedDate: string;
  if (langauge === "fa") {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      calendar: "persian",
    };
    formattedDate = new Intl.DateTimeFormat(langauge, options).format(date);
  } else {
    formattedDate = formatDateToEnglish(date);
  }

  return formattedDate;
};

const formatDateToEnglish = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};
