//
import { ChatIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
//
import { classNames } from "common/utils";
import type { IMenuItem } from "common/models";

export const Footer: FC = () => {
  return (
    <footer className="bg-footer">
      <div className="container mx-auto flex text-white">
        {/*  */}
        <div className="flex w-[300px] shrink-0 flex-col justify-between bg-[#292d33] pt-[50px] pb-[30px]">
          <p>GARAGE.MN</p>
          <p className="text-xs leading-snug">
            © 2022 Digital Garage. All Rights Reserved.
          </p>
        </div>
        {/*  */}
        <div className="grid grow grid-cols-4 gap-y-[70px] bg-[#1f2226] pl-20 pt-[50px] pb-[30px]">
          {/* menu */}
          {menuItems.map(({ items, key, label }) => (
            <div key={key} className="flex flex-col gap-y-5">
              <h4>{label}</h4>
              <ul className="flex flex-col">
                {items.map(({ href, key, label }) => (
                  <li key={key}>
                    <Link href={href}>
                      <a>
                        <p className="leading-loose">{label}</p>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* SNS */}
          <div>
            <ul className="flex justify-end gap-x-6">
              {items.map(({ href, key, label }) => (
                <li key={key}>
                  <Link href={href}>
                    <a>
                      {/* <Image src="" className="h-6 w-6" /> */}
                      <ChatIcon className="h-6 w-6" />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* tecdoc inside */}
          <div className="col-span-4 flex flex-col gap-y-5 border-y py-[35px]">
            <h3>TecDoc inside</h3>
            <p className="text-xs leading-5 opacity-50">
              The data shown here, especially the complete database, may not be
              copied. It is strictly prohibited to duplicate the data and
              database and distribute the same, and/or instruct third parties to
              engage in such activities, without prior consent from TecAlliance.
              Any use of content in a manner not expressly authorised onstitutes
              copyright infringement and violators will be prosecuted.
            </p>
          </div>
          {/*  */}
          <div className="col-span-4 flex w-full justify-end">
            <ul className="flex gap-x-[36px]">
              {items.map(({ href, key, label }) => (
                <li key={key}>
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface IFooterMenuCategory {
  items: IMenuItem[];
  key: string;
  label: string;
}

const menuItems: IFooterMenuCategory[] = [
  {
    items: [
      {
        href: "/",
        key: "lighting",
        label: "Lighting",
      },
      {
        href: "/",
        key: "shock_absorber",
        label: "Shock Absorber",
      },
      {
        href: "/",
        key: "clutch_kit",
        label: "Clutch Kit",
      },
      {
        href: "/",
        key: "suspension",
        label: "Suspension",
      },
      {
        href: "/",
        key: "wheel_bearing",
        label: "Wheel Bearing",
      },
      {
        href: "/",
        key: "car_care",
        label: "Car care",
      },
      {
        href: "/",
        key: "cleaning",
        label: "Cleaning",
      },
      {
        href: "/",
        key: "compressor",
        label: "Compressor",
      },
      {
        href: "/",
        key: "electrics",
        label: "Electrics",
      },
    ],
    key: "category",
    label: "Category",
  },
  {
    items: [
      {
        href: "/",
        key: "help_center",
        label: "Help Center",
      },
      {
        href: "/",
        key: "our_rules",
        label: "Our Rules",
      },
      {
        href: "/",
        key: "creator_resources",
        label: "Creator Resources",
      },
      {
        href: "/",
        key: "forward_funds",
        label: "Forward Funds",
      },
      {
        href: "/",
        key: "brand_assets",
        label: "Brand Assets",
      },
    ],
    key: "support",
    label: "Support",
  },
  {
    items: [
      {
        href: "/",
        key: "about_us",
        label: "About Us",
      },
      {
        href: "/",
        key: "our_charter",
        label: "Our Charter",
      },
      {
        href: "/",
        key: "statistics",
        label: "Statistics",
      },
      {
        href: "/",
        key: "media_press",
        label: "Media Press",
      },
      {
        href: "/",
        key: "company_jobs",
        label: "Company Jobs",
      },
    ],
    key: "aboutUs",
    label: "About Us",
  },
];

const items: IMenuItem[] = [
  {
    href: "/",
    key: "cookie_policy",
    label: "Cookie Policy",
  },
  {
    href: "/",
    key: "terms",
    label: "Terms",
  },
];
