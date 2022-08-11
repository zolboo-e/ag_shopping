//
import Link from "next/link";
import type { FC } from "react";
//
import { IMenuItem } from "common/models";
import { classNames } from "common/utils";

interface IExternalNavigation {
  current: "shopping" | "order" | "auto_club" | "partnership";
}
export const ExternalNavigation: FC<IExternalNavigation> = ({ current }) => {
  return (
    <nav className="border-[#] w-full border-b border-background bg-white">
      <div className="container mx-auto flex justify-between py-4">
        <ul className="flex gap-x-[36px]">
          {items.map(({ href, key, label }) => (
            <li key={key}>
              <Link href={href}>
                <a className={classNames(key === current && "text-primary")}>
                  <p>{label}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <p>{`7777-8985  •  09:00-19:00`}</p>
      </div>
    </nav>
  );
};

const items: IMenuItem[] = [
  {
    href: "/",
    key: "shopping",
    label: "Shopping",
  },
  {
    href: "/",
    key: "order",
    label: "Order",
  },
  {
    href: "/",
    key: "auto_club",
    label: "Auto Club",
  },
  {
    href: "/",
    key: "partnership",
    label: "Partnership",
  },
];
