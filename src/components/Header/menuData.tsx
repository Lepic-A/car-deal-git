import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Начало",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "За Нас",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Цени",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 5,
    title: "Контакти",
    path: "/contact",
    newTab: false,
  },
  {
    id: 5,
    title: "Блог",
    path: "/blogs",
    newTab: false,
  },
  // {
  //   id: 6,
  //   title: "Услуги",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 61,
  //       title: "Закупуване на превозни средства от Германия",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 62,
  //       title: "Консултация и проверка на документи за МПС",
  //       path: "/pricing",
  //       newTab: false,
  //     },
  //     {
  //       id: 63,
  //       title: "Технически инспекции на превозни средства в България и Германия",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 64,
  //       title: "Съдействие за регистрация в КАТ",
  //       path: "/blogs",
  //       newTab: false,
  //     },
  //     {
  //       id: 66,
  //       title: "Транспорт и доставка на превозни средства от Германия до България",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
