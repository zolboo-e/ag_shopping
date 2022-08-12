//
import Link from "next/link";
import { FC, useState } from "react";
//
import {
  IgnoreParentSize,
  ProductLarge,
  SectionTitle,
} from "common/components";
import { classNames } from "common/utils";

export const FeaturedCategories: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    categories.length > 0 ? categories[0].id : ""
  );

  return (
    <IgnoreParentSize className="bg-[#292d33]">
      <div className="container mx-auto my-[100px] flex w-full flex-col gap-y-[50px] ">
        <SectionTitle title="Featured Categories" />
        <div className="flex flex-col gap-y-[30px]">
          <ul className="grid grid-cols-4">
            {categories.map(({ id, title }) => (
              <li key={id} onClick={() => setSelectedCategory(id)}>
                <div
                  className={classNames(
                    "flex items-center justify-center border-b-2 border-white/10 py-5",
                    selectedCategory === id && "border-b-primary text-primary"
                  )}
                >
                  {title}
                </div>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-4 gap-5">
            {categories
              .find(({ id }) => id === selectedCategory)
              ?.children.map((item) => (
                <ProductLarge {...item} key={item.id} />
              ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="">
            <a className="rounded border-2 border-white/10 px-20 py-3">
              Бүгдийг харах
            </a>
          </Link>
        </div>
      </div>
    </IgnoreParentSize>
  );
};

const categories = [
  {
    children: [...Array(8)].map((_, index) => {
      return {
        id: `engine-${index}`,
        images: [
          "https://placeimg.com/280/320/animals",
          "https://placeimg.com/280/320/arch",
          "https://placeimg.com/280/320/nature",
        ],
        price: 500000,
        title: "Engine",
      };
    }),
    id: "engine",
    title: "Engine",
  },
  {
    children: [...Array(8)].map((_, index) => {
      return {
        id: `engine-${index}`,
        images: [
          "https://placeimg.com/280/320/animals",
          "https://placeimg.com/280/320/arch",
          "https://placeimg.com/280/320/nature",
        ],
        price: 500000,
        title: "Filters",
      };
    }),
    id: "filters",
    title: "Filters",
  },
  {
    children: [...Array(8)].map((_, index) => {
      return {
        id: `engine-${index}`,
        images: [
          "https://placeimg.com/280/320/animals",
          "https://placeimg.com/280/320/arch",
          "https://placeimg.com/280/320/nature",
        ],
        price: 500000,
        title: "Suspension",
      };
    }),
    id: "suspension",
    title: "Suspension",
  },
  {
    children: [...Array(8)].map((_, index) => {
      return {
        id: `engine-${index}`,
        images: [
          "https://placeimg.com/280/320/animals",
          "https://placeimg.com/280/320/arch",
          "https://placeimg.com/280/320/nature",
        ],
        price: 500000,
        title: "Brakes",
      };
    }),
    id: "brakes",
    title: "Brakes",
  },
];
