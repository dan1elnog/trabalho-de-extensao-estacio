import { FaAws, FaCss3, FaDatabase, FaHouse, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact } from "react-icons/fa6";
import { SideBarObjectType } from "../types/SideBarObjectType";
import { PagesEnum } from "../enums/PagesEnum";

const sideBarObjectList: SideBarObjectType[] = [
  { id: 1, title: "Home", icon: FaHouse, page: PagesEnum.HOME_PAGE},
  { id: 2, title: "HTML", icon: FaHtml5, page: PagesEnum.HTML_PAGE},
  { id: 3, title: "CSS", icon: FaCss3, page: PagesEnum.CSS_PAGE},
  { id: 4, title: "Java", icon: FaJava, page: PagesEnum.JAVA_PAGE},
  { id: 5, title: "PHP", icon: FaPhp, page: PagesEnum.PHP_PAGE},
  { id: 6, title: "Python", icon: FaPython, page: PagesEnum.PYTHON_PAGE},
  { id: 7, title: "JavaScript", icon: FaJs, page: PagesEnum.JAVASCRIPT_PAGE},
  { id: 8, title: "Banco de dados", icon: FaDatabase, page: PagesEnum.DATABASE },
  { id: 9, title: "AWS", icon: FaAws, page: PagesEnum.AWS_PAGE},
  { id: 10, title: "ReactNative", icon: FaReact, page: PagesEnum.REACT_NATIVE}
]

export default sideBarObjectList