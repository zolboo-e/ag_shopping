//
import type { NextPageWithLayout } from "next";

//
import { MainLayout } from "common/components";
//
import {
  BrowseHistory,
  FeaturedCategories,
  MostVisited,
  NewProducts,
  Services,
} from "modules/others/home/components";

export const CategoriesPage: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="h-[2000px]">{`Categories Page`}</div>
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
