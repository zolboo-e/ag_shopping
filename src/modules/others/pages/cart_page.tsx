//
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import type { NextPageWithLayout } from "next";
import Link from "next/link";

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

export const CartPage: NextPageWithLayout = (props) => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-4">
        {Array.from(Array(6).keys()).map((index) => (
          <div key={index} className="flex flex-col gap-y-5 bg-white p-5">
            <div className="flex gap-x-4">
              <div className="w-1/3">
                <div className="aspect-1 bg-gray-100"></div>
              </div>
              <div className="flex flex-col gap-y-4">
                <SectionTitleMobile
                  hasDecoration={false}
                  subtitle="#MotorOil"
                  title="Opel GM DEXO S2 Ultra Motor Oil Super Synthetic"
                />
                <table className="table-compact table w-full">
                  <tbody>
                    {[
                      {
                        key: "Төрөл",
                        value: "Моторын тос",
                      },
                      {
                        key: "Өнгө",
                        value: "Бор шаргал",
                      },
                      {
                        key: "Хэмжээ",
                        value: "34",
                      },
                      {
                        key: "Хямдрал",
                        value: "30%",
                      },
                    ].map(({ key, value }, index) => (
                      <tr key={index}>
                        <th className="text-gray-300">{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-4">
              <CustomIconButton className="btn-ghost btn-sm rounded-full bg-white">
                <MinusIcon className="h-4 w-4" />
              </CustomIconButton>
              <div>{`30 Pcs`}</div>
              <CustomIconButton className="btn-ghost btn-sm rounded-full bg-white">
                <PlusIcon className="h-4 w-4" />
              </CustomIconButton>
            </div>
            <div className="flex gap-x-4">
              <CustomButton className="btn-outline flex-1">{`Save`}</CustomButton>
              <CustomButton className="flex-1">{`Delete`}</CustomButton>
            </div>
          </div>
        ))}
      </div>
      <Divider />
      <table className="table-zebra table w-full">
        <tbody>
          {[
            {
              key: "Нийлбэр дүн",
              value: "650'000.00",
            },
            {
              key: "Хүргэлт",
              value: "0.00",
            },
            {
              key: "Хямдрал",
              value: "30%",
            },
            {
              key: "Хэмнэлт",
              value: "495'000.00",
            },
            {
              key: "Нийт үнэ",
              value: "2'650'000.00",
            },
          ].map(({ key, value }, index) => (
            <tr key={index}>
              <td>{key}</td>
              <td className="text-end">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomButton>{`Төлбөр хийх`}</CustomButton>
    </div>
  );
};
CartPage.getLayout = (page) => {
  return <MobileSubLayout title="Your Cart">{page}</MobileSubLayout>;
};
