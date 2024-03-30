import { SORT_TYPES } from "@/variables/enums";

function homeworkSort(array: IHymn[]) {
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

export function arraySort(array: IHymn[], order: SORT_TYPES) {
  if (order === SORT_TYPES.NUMBER_ASC || order === SORT_TYPES.NUMBER_DESC) {
    return homeworkSort(numberSort(array, order));
  }
  return homeworkSort(koreanSort(array, order));
}
