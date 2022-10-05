//
import type { NextPageWithLayout } from "next";
import Link from "next/link";

//
import { SortingIcon, VehicleIcon } from "common/assets";
import {
  CustomButton,
  CustomIconButton,
  CustomInput,
  CustomLinkButton,
  IgnoreParentSize,
  MainLayout,
  ProductLargeMobile,
  ProductSmallMobile,
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
          {Array.from(Array(6).keys())
            .map((item) => ({
              key: `category_${item}`,
              value: `Category ${item}`,
            }))
            .map(({ key, value }) => (
              <li key={key}>
                <Link href="/categories">
                  <a>
                    <div className="h-full w-full bg-white">
                      <div className="flex flex-col items-center justify-between gap-y-4 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                          <VehicleIcon />
                        </div>
                        <h5 className="text-center font-medium">{value}</h5>
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
        <IgnoreParentSize>
          <ul className="carousel scroll-px-5 gap-x-5 px-5">
            {Array.from(Array(6).keys()).map((item) => (
              <li key={item} className="carousel-item">
                <div className="w-48">
                  <ProductLargeMobile
                    id={`${item}`}
                    image={`/assets/images/product_dummy.png`}
                    price={370000}
                    title="Opel GM DEXO S2 Ultra Motor Oil"
                  />
                </div>
              </li>
            ))}
          </ul>
        </IgnoreParentSize>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Онцлох бараа"
        />
        <IgnoreParentSize>
          <ul className="carousel scroll-px-5 gap-x-5 px-5">
            {Array.from(Array(6).keys()).map((item) => (
              <li key={item} className="carousel-item">
                <div className="w-48">
                  <ProductLargeMobile
                    id={`${item}`}
                    image={`/assets/images/product_dummy.png`}
                    price={370000}
                    title="Opel GM DEXO S2 Ultra Motor Oil"
                  />
                </div>
              </li>
            ))}
          </ul>
        </IgnoreParentSize>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          subtitle="We look out for you before"
          title="Их үзсэн"
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
          title="Эрэлт ихтэй"
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
HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
