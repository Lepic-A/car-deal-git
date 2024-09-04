import { Feature } from "@/types/feature";
import { FaCar, FaTruck, FaTools, FaRegIdBadge, FaWrench } from 'react-icons/fa';

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaCar size={35} color="white" />,
    title: "Закупуване на автомобили от Германия",
    paragraph: "Помагаме ви да закупите качествени автомобили от Германия.",
    //btn: "Научи повече",
    btnLink: "/#",
  },
  // {
  //   id: 2,
  //   icon: <FaTruck size={35} color="white" />,
  //   title: "Транспорт и доставка на превозни средства",
  //   paragraph: "Осигуряваме безопасен транспорт на превозни средства до България.",
  //   btn: "Научи повече",
  //   btnLink: "/#",
  // },
  {
    id: 3,
    icon: <FaTools size={35} color="white" />,
    title: "Консултация и проверка на документи за МПС",
    paragraph: "Консултации и помощ при проверка на документите на превозни средства.",
    //btn: "Научи повече",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: <FaWrench size={35} color="white" />,
    title: "Технически инспекции на превозни средства",
    paragraph: "Извършваме технически инспекции за вашето превозно средство.",
    //btn: "Научи повече",
    btnLink: "/#",
  },
  {
    id: 5,
    icon: <FaRegIdBadge size={35} color="white" />,
    title: "Съдействие за регистрация в КАТ",
    paragraph: "Съдействие за бърза и лесна регистрация на автомобила в КАТ.",
    //btn: "Научи повече",
    btnLink: "/#",
  },
];

export default featuresData;
