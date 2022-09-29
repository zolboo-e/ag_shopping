//
import { FC } from "react";
//
import { SectionTitle, ServiceLarge } from "common/components";
import { classNames } from "common/utils";

export const Services: FC = () => {
  return (
    <div className="flex flex-col gap-y-[30px]">
      <SectionTitle title="Services" />
      <ul className="flex gap-x-2.5">
        {_serviceItems.map(({ key, title }) => (
          <li key={key} className="rounded bg-white px-5 py-4">
            <div className="text-[14px] font-medium">{title}</div>
          </li>
        ))}
      </ul>
      <ul className="grid w-full grid-cols-4 gap-5">
        {serviceItems.map((item) => (
          <li key={item.id}>
            <ServiceLarge {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const _serviceItems = [
  { key: "1", title: "Кузов засвар" },
  { key: "2", title: "Мотор засвар" },
  { key: "3", title: "Хуулга наалгах" },
  { key: "4", title: "Агаар шүүгч" },
  { key: "5", title: "Маслын шүүр" },
  { key: "6", title: "Тосолгоо" },
];
const serviceItems = [...Array(4)].map((_, index) => {
  return {
    description:
      "The best repair is the one you don't but time catches up with us.",
    id: `a1b2c3d4-${index}`,
    image: "https://placeimg.com/280/372/tech",
    title: "Cleaning",
  };
});
