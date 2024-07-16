import { SORT_TYPES } from "@/variables/enums";

export function homeworkSort(array: IHymn[] | ICheckedBoxItem[]) {
  return array.sort(
    (
      { isHomework: aIsHomework = false },
      { isHomework: bIsHomework = false },
    ) => {
      if (aIsHomework > bIsHomework) return -1;

      return 0;
    },
  );
}

function koreanSort(array: IHymn[], order: SORT_TYPES) {
  const sortedArray = array.sort(({ title: aTitle }, { title: bTitle }) =>
    aTitle.split(".")[1].localeCompare(bTitle.split(".")[1]),
  );
  return order === SORT_TYPES.LANGUAGE_ASC
    ? sortedArray
    : sortedArray.reverse();
}

function numberSort(array: IHymn[], order: SORT_TYPES) {
  const sortedArray = array.sort(
    ({ title: aTitle }, { title: bTitle }) =>
      +aTitle.split(".")[0] - +bTitle.split(".")[0],
  );
  return order === SORT_TYPES.NUMBER_ASC ? sortedArray : sortedArray.reverse();
}

function filterMulti(array: IHymn[]) {
  const multiArray = array.filter(({ isMulti }) => {
    return !!isMulti;
  });

  return array.filter(({ title, isMulti }) => {
    if (multiArray.some(({ title: multiTitle }) => multiTitle === title)) {
      return !!isMulti;
    }
    return true;
  });
}

function filterIsHymn(array: IHymn[], isHymn: boolean) {
  if (!isHymn) return array;
  return array.filter(({ song }) => song);
}

export function arraySort(array: IHymn[], order: SORT_TYPES, isHymn: boolean) {
  if (order === SORT_TYPES.NUMBER_ASC || order === SORT_TYPES.NUMBER_DESC) {
    return homeworkSort(
      numberSort(filterMulti(filterIsHymn(array, isHymn)), order),
    );
  }
  return homeworkSort(
    koreanSort(filterMulti(filterIsHymn(array, isHymn)), order),
  );
}
