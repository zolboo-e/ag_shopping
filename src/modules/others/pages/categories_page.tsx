//
import type { NextPageWithLayout } from "next";

//
import { ArrowDownIcon, SortingIcon } from "common/assets";
import {
  CustomButton,
  CustomIconButton,
  CustomLinkButton,
  IgnoreParentSize,
  MainLayout,
  ProductSmallMobile,
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
      <IgnoreParentSize>
        <ul className="carousel scroll-px-5 gap-x-5 px-5">
          {[
            "All",
            "Dumpings",
            "Auto Detail",
            "Suspension",
            "Dumpings",
            "Auto Detail",
            "Suspension",
            "Dumpings",
            "Auto Detail",
            "Suspension",
          ].map((item, index) => (
            <li key={item} className="carousel-item">
              <CustomButton
                className={classNames(
                  "px-6",
                  index !== 0 && "border-none bg-white text-black"
                )}
              >{`${item}`}</CustomButton>
            </li>
          ))}
        </ul>
      </IgnoreParentSize>
      <div className="rounded-md bg-white p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 w-full rounded-md bg-gray-100 px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="text-gray-300">{`Үйлдвэрлэгч`}</div>
              <ArrowDownIcon />
            </div>
          </div>
          <div className="w-full rounded-md bg-gray-100 px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="text-gray-300">{`Загвар`}</div>
              <ArrowDownIcon />
            </div>
          </div>
          <div className="w-full rounded-md bg-gray-100 px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="text-gray-300">{`Мотор`}</div>
              <ArrowDownIcon />
            </div>
          </div>
          <div className="col-span-2 w-full rounded-md bg-gray-100 px-5 py-4">
            <div className="flex items-center justify-start">
              <div className="text-gray-300">{`0000 АБГ / Заавал биш`}</div>
            </div>
          </div>
          <CustomButton className="col-span-2">{`Хайлт хийх`}</CustomButton>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Dumpings"
        />
        <ul className="grid grid-cols-2 gap-4">
          {Array.from(Array(6).keys()).map((item) => (
            <li key={item}>
              <ProductSmallMobile
                id={`${item}`}
                image={`/assets/images/product_dummy.png`}
                price={370000}
                title="Opel GM DEXO S2 Ultra Motor Oil"
              />
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
              <ProductSmallMobile
                id={`${item}`}
                image={`/assets/images/product_dummy.png`}
                price={370000}
                title="Opel GM DEXO S2 Ultra Motor Oil"
              />
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
              <ProductSmallMobile
                id={`${item}`}
                image={`/assets/images/product_dummy.png`}
                price={370000}
                title="Opel GM DEXO S2 Ultra Motor Oil"
              />
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
