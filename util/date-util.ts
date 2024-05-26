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
  const startOfYear: Date = new Date(currentDate.getFullYear(), 3, 22); // 1월 1일
  const pastDays: number = Math.floor(
    (currentDate.getTime() - startOfYear.getTime()) / (24 * 3600 * 1000),
  );
  const currentWeek: number = Math.floor(pastDays / 7);

  return names[currentWeek % names.length];
}

export function getSundayOfCurrentWeek() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (일요일)부터 6 (토요일)까지의 값을 반환합니다.
  let sunday;

  if (dayOfWeek === 0) {
    // 오늘이 일요일인 경우
    sunday = new Date(today);
  } else {
    // 오늘이 일요일이 아닌 경우
    const diffToSunday = 7 - dayOfWeek; // 오늘로부터 다음 일요일까지의 날짜 차이를 계산합니다.
    sunday = new Date(today);
    sunday.setDate(today.getDate() + diffToSunday);
  }
  const month = String(sunday.getMonth() + 1);
  const day = String(sunday.getDate()).padStart(2, "0");

  return `${month}월 ${day}일`;
}
