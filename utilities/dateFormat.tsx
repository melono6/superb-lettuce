const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonth(number: number) {
  return months[number];
}

export function getDay(day: number) {
  return day < 10 ? "0" + day : day;
}

export function format(date: string) {
  const convertString = new Date(date.replace(/-/g, "/"));
  const day = getDay(convertString.getDate());
  const month = getMonth(convertString.getMonth());
  const year = convertString.getFullYear();
  return `${day} ${month} ${year}`;
}
