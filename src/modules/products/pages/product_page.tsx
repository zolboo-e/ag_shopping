//
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPageWithLayout,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";

//
import {
  CustomButton,
  CustomIconButton,
  CustomLinkButton,
  Divider,
  MobileSubLayout,
  SectionTitleMobile,
} from "common/components";
import { classNames } from "common/utils";
//

type Test = InferGetStaticPropsType<typeof getStaticProps>;
export const ProductPage: NextPageWithLayout<Test> = (props) => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className="flex flex-col gap-y-8">
      <div className="grid grid-cols-3 gap-2.5">
        {Array.from(Array(4).keys()).map((_, index) => (
          <div
            key={index}
            className={classNames("w-full", index === 0 && "col-span-3")}
          >
            <div className="aspect-1 bg-white"></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          hasDecoration={false}
          subtitle="#MotorOil"
          title="Opel GM DEXO S2 Ultra Motor Oil"
        />
        <div className="text-2xl text-primary">{`370'000.00`}</div>
      </div>
      <Divider />
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          hasDecoration={false}
          subtitle="We look out for you before"
          title="Select Type"
        />
        <div className="grid grid-cols-5 gap-2.5">
          {Array.from(Array(5).keys()).map((index) => (
            <div key={index} className={classNames("w-full")}>
              <div className="aspect-1 bg-white"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          hasDecoration={false}
          subtitle="We look out for you before"
          title="Select Size"
        />
        <div className="grid grid-cols-5 gap-2.5">
          {Array.from(Array(10).keys()).map((index) => (
            <div key={index} className={classNames("w-full")}>
              <div className="flex aspect-1 items-center justify-center bg-white">
                {index}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between bg-white p-4">
          <CustomIconButton className="btn-ghost btn-sm rounded-full bg-gray-100">
            <MinusIcon className="h-4 w-4" />
          </CustomIconButton>
          <div>{`30 Pcs`}</div>
          <CustomIconButton className="btn-ghost btn-sm rounded-full bg-gray-100">
            <PlusIcon className="h-4 w-4" />
          </CustomIconButton>
        </div>
        <CustomButton>{`Add to Card`}</CustomButton>
      </div>
      <Divider />
      <div className="flex flex-col gap-y-4">
        <div className={"collapse collapse-plus bg-white"}>
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">{`Description`}</div>
          <div className="collapse-content">
            <p>{`We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.`}</p>
          </div>
        </div>
        <div className={"collapse collapse-plus bg-white"}>
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">{`Specifications`}</div>
          <div className="collapse-content">
            <p>{`We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.`}</p>
          </div>
        </div>
        <div className={"collapse collapse-plus bg-white"}>
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">{`Returns`}</div>
          <div className="collapse-content">
            <p>{`We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.`}</p>
          </div>
        </div>
        <div className={"collapse collapse-plus bg-white"}>
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">{`Size & Fit`}</div>
          <div className="collapse-content">
            <p>{`We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.`}</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex flex-col gap-y-5">
        <SectionTitleMobile
          hasDecoration={false}
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
          hasDecoration={false}
          subtitle="We look out for you before"
          title="Санал болгох"
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
    </div>
  );
};
ProductPage.getLayout = (page, data: Test) => {
  return (
    <MobileSubLayout header={{ title: data.title }}>{page}</MobileSubLayout>
  );
};

export const getStaticProps: GetStaticProps<{ title: string }> = async (
  context
) => {
  return {
    props: { title: "test" },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
