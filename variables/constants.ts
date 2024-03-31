import { TAB_TYPES } from "@/variables/enums";
import { hymns } from "@/mock/hymns";
import { gospels } from "@/mock/gospels";
import { prints } from "@/mock/prints";
import { pastors } from "@/mock/pastors";
import { michaels } from "@/mock/michaels";

export const MOCKS_BY_PAGE_TYPES = {
  [TAB_TYPES.HYMNS]: hymns,
  [TAB_TYPES.PRINTS]: prints,
  [TAB_TYPES.GOSPELS]: gospels,
  [TAB_TYPES.PASTOR]: pastors,
  [TAB_TYPES.MICHAELS]: michaels,
};

export const PATHS_BY_PAGE_TYPES = {
  [TAB_TYPES.HYMNS]: "hymn",
  [TAB_TYPES.PRINTS]: "print",
  [TAB_TYPES.GOSPELS]: "gospel",
  [TAB_TYPES.PASTOR]: "pastor",
  [TAB_TYPES.MICHAELS]: "michael",
};
