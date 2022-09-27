//
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import type { FC } from "react";
import Link from "next/link";
//
import { HeaderSearch } from "common/components";
import { classNames } from "common/utils";

export const Header: FC = () => {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center gap-x-12">
          <p className="text-[20px]">GARAGE.MN</p>
          <HeaderSearch />
        </div>
        <div className="flex gap-x-2.5">
          <Link href="">
            <a
              className={classNames("rounded-full p-2.5", "hover:bg-black/10")}
            >
              <HeartIcon className="h-5 w-5" />
            </a>
          </Link>
          <Link href="">
            <a
              className={classNames("rounded-full p-2.5", "hover:bg-black/10")}
            >
              <ShoppingCartIcon className="h-5 w-5" />
            </a>
          </Link>
          <Link href="">
            <a
              className={classNames(
                "rounded-full bg-black p-2.5",
                "hover:bg-black/75"
              )}
            >
              <UserIcon className="h-5 w-5 text-white" />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
