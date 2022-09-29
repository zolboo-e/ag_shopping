//
import type { NextPageWithLayout } from "next";
import Link from "next/link";

//
import { SortingIcon } from "common/assets/icons";
import {
  CustomButton,
  CustomIconButton,
  CustomInput,
  CustomLinkButton,
  MainLayout,
  SectionTitleMobile,
} from "common/components";
//
import {
  BrowseHistory,
  FeaturedCategories,
  MostVisited,
  NewProducts,
  Services,
} from "modules/others/components";

export const HomePage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex w-full gap-x-4">
        <div className="flex w-full items-center bg-white px-4 text-gray-300">{`Search Product`}</div>
        <CustomIconButton className="btn-ghost border-none bg-white">
          <SortingIcon className="fill-gray-300" />
        </CustomIconButton>
      </div>
      <div className="h-48 w-full bg-[#ffb80e] p-5"></div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Онцлох категори"
        />
        <ul className="grid grid-cols-3 gap-4">
          {Array.from(Array(6).keys()).map((item) => (
            <li key={item}>
              <Link href="/categories">
                <a>
                  <div className="w-full bg-white">
                    <div className="flex flex-col items-center justify-between gap-y-4 p-5">
                      <div className="h-10 w-10 rounded-full bg-primary"></div>
                      <p>{`Dumpings`}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Шинэ бараа"
        />
        <ul className="carousel gap-x-5">
          {Array.from(Array(6).keys()).map((item) => (
            <li key={item} className="carousel-item">
              <div className="h-80 w-48 bg-white"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Онцлох бараа"
        />
        <ul className="carousel gap-x-5">
          {Array.from(Array(6).keys()).map((item) => (
            <li key={item} className="carousel-item">
              <div className="h-80 w-48 bg-white"></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Их үзсэн"
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
          title="Эрэлт ихтэй"
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
HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
