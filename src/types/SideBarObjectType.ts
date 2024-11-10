import { IconType } from "react-icons";
import { PagesEnum } from "../enums/PagesEnum";

export type SideBarObjectType = {
  id: number,
  icon: IconType,
  page: PagesEnum
  title: string,
}