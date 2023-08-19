import { UserType } from "./UserType";

export interface ItemType {
  by:          string;
  descendants: number;
  id:          number;
  kids:        number[];
  score:       number;
  time:        number;
  title:       string;
  type:        string;
  url:         string;
}

export interface AuthorAndItemType {
  story: ItemType;
  author: UserType;
}