import {
  BeforeAfter1Before,
  BeforeAfter1After,
  BeforeAfter2Before,
  BeforeAfter2After,
  BeforeAfter3Before,
  BeforeAfter3After,
} from "../components/assets/BeforeAfterIllustrations.jsx";

export const BEFORE_AFTER_SLIDES = [
  {
    title: "Реставрация скола",
    before: <BeforeAfter1Before />,
    after: <BeforeAfter1After />,
    desc: "Скол переднего зуба → Реставрация композитом за 1 визит → 1,5 часа → от 8 000 ₽",
  },
  {
    title: "Выравнивание зубов",
    before: <BeforeAfter2Before />,
    after: <BeforeAfter2After />,
    desc: "Скученность нижнего ряда → Элайнеры Invisalign → 14 месяцев → от 85 000 ₽",
  },
  {
    title: "Имплантация",
    before: <BeforeAfter3Before />,
    after: <BeforeAfter3After />,
    desc: "Отсутствие зуба 5 лет → Имплант + коронка → 4 месяца → от 45 000 ₽",
  },
];
