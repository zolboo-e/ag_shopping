//
import { FC } from "react";
//
import { ProductSmall, SectionTitle } from "common/components";
import { classNames } from "common/utils";

export const BrowseHistory: FC = () => {
  return (
    <div className="flex flex-col gap-y-[50px]">
      <SectionTitle title="Browse History" />
      <ul className="grid w-full grid-cols-4 gap-5">
        {browseHistoryItems.map((item) => (
          <li key={item.id}>
            <ProductSmall {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const browseHistoryItems = [...Array(12)].map((_, index) => {
  return {
    id: `a1b2c3d4-${index}`,
    image: "https://placeimg.com/80/125/people",
    price: 500000,
    title: "Opel GM DEXO S2 Ultra Motor Oil Super Synthetic",
  };
});
