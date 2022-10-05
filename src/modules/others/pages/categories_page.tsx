//
import type { NextPageWithLayout } from "next";

//
import { SortingIcon } from "common/assets";
import {
  CustomButton,
  CustomIconButton,
  CustomLinkButton,
  MainLayout,
  SectionTitleMobile,
} from "common/components";
import { classNames } from "common/utils";

export const CategoriesPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex w-full gap-x-4">
        <div className="flex w-full items-center bg-white px-4 text-gray-300">{`Search Product`}</div>
        <CustomIconButton className="btn-ghost border-none bg-white">
          <SortingIcon className="fill-gray-300" />
        </CustomIconButton>
      </div>
      <ul className="carousel gap-x-5">
        {Array.from(Array(10).keys()).map((item, index) => (
          <li key={item} className="carousel-item">
            <CustomButton
              className={classNames(
                "px-6",
                index !== 0 && "border-none bg-white text-black"
              )}
            >{`All ${index}`}</CustomButton>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Dumpings"
        />
        <ul className="grid grid-cols-2 gap-4">
          {Array.from(Array(6).keys()).map((item) => (
            <li key={item}>
              <div className="h-80 bg-white"></div>
            </li>
          ))}
        </ul>
        <CustomLinkButton href="/">{`Бүгдийг үзэх`}</CustomLinkButton>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Auto Detail"
        />
        <ul className="grid grid-cols-2 gap-4">
          {Array.from(Array(6).keys()).map((item) => (
            <li key={item}>
              <div className="h-80 bg-white"></div>
            </li>
          ))}
        </ul>
        <CustomLinkButton href="/">{`Бүгдийг үзэх`}</CustomLinkButton>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Suspension"
        />
        <ul className="grid grid-cols-2 gap-4">
          {Array.from(Array(6).keys()).map((item) => (
            <li key={item}>
              <div className="h-80 bg-white"></div>
            </li>
          ))}
        </ul>
        <CustomLinkButton href="/">{`Бүгдийг үзэх`}</CustomLinkButton>
      </div>
      {/* <div className="flex flex-col gap-y-[100px] pt-5 pb-40">
      <NewProducts />
      <FeaturedCategories />
      <Services />
      <MostVisited />
      <BrowseHistory />
    </div> */}
    </div>
  );
};
CategoriesPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
