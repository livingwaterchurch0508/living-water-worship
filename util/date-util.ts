export function formatDateTime(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function getPersonOfTheWeek(names: string[]) {
  const currentDate: Date = new Date();
  const startOfYear: Date = new Date(currentDate.getFullYear(), 0, 1); // 1월 1일
  const pastDays: number = Math.floor(
    (currentDate.getTime() - startOfYear.getTime()) / (24 * 3600 * 1000),
  );
  const currentWeek: number = Math.floor(pastDays / 7);

  return names[currentWeek % names.length];
}
