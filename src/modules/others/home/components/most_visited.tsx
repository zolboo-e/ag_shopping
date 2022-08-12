//
import Link from "next/link";
import { FC } from "react";
//
import { ProductLarge, SectionTitle } from "common/components";
import { classNames } from "common/utils";

export const MostVisited: FC = () => {
  return (
    <div className="flex flex-col gap-y-[50px]">
      <SectionTitle title="Most Visited" />
      <ul className="grid w-full grid-cols-4 gap-5">
        {mostVisitedItems.map((item) => (
          <li key={item.id}>
            <ProductLarge {...item} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Link href="">
          <a className="rounded bg-white px-20 py-3">Бүгдийг харах</a>
        </Link>
      </div>
    </div>
  );
};
const mostVisitedItems = [...Array(8)].map((_, index) => {
  return {
    id: `a1b2c3d4-${index}`,
    images: [
      "https://placeimg.com/280/320/animals",
      "https://placeimg.com/280/320/arch",
      "https://placeimg.com/280/320/nature",
    ],
    price: 500000,
    title: "Opel GM DEXO S2 Ultra Motor Oil Super Synthetic",
  };
});
