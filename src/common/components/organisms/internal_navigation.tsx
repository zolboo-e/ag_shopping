//
import Link from "next/link";
import type { FC } from "react";
//
import type { IMenuItem } from "common/models";
import { classNames } from "common/utils";

interface IInternalNavigation {
  current:
    | "all"
    | "suspension"
    | "oil"
    | "battery"
    | "brake_disk"
    | "air]_filter"
    | "tire";
}
export const InternalNavigation: FC<IInternalNavigation> = ({ current }) => {
  return (
    <nav className="w-full bg-background-secondary">
      <div className="container mx-auto flex justify-between">
        <ul className="flex gap-x-9">
          {items1.map(({ href, key, label }) => (
            <li
              key={key}
              className={classNames(
                "py-4",
                key === current && "bg-primary pl-4 pr-28 text-white"
              )}
            >
              <Link href={href}>
                <a>
                  <p>{label}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-x-9">
          {items2.map(({ href, key, label }) => (
            <li key={key} className="py-4">
              <Link href={href}>
                <a>
                  <p>{label}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const items1: IMenuItem[] = [
  {
    href: "/",
    key: "all",
    label: "All categories",
  },
  {
    href: "/",
    key: "suspension",
    label: "Suspension",
  },
  {
    href: "/",
    key: "oil",
    label: "Oil",
  },
  {
    href: "/",
    key: "battery",
    label: "Battery",
  },
  {
    href: "/",
    key: "brake_disk",
    label: "Brake disk",
  },
  {
    href: "/",
    key: "air_filter",
    label: "Air filter",
  },
  {
    href: "/",
    key: "tire",
    label: "Tire",
  },
];

const items2: IMenuItem[] = [
  {
    href: "/",
    key: "brand",
    label: "Brand",
  },
  {
    href: "/",
    key: "sale",
    label: "Sale",
  },
  {
    href: "/",
    key: "leasing",
    label: "Leasing",
  },
];
