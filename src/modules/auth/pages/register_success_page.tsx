//
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import type { NextPageWithLayout } from "next";
import Image from "next/image";
import Link from "next/link";

//
import { classNames } from "common/utils";

//

export const RegisterSuccessPage: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen w-full items-center justify-center">
        <div
          className={classNames(
            "flex h-full max-h-[540px] w-full  flex-col justify-between",
            "sm:max-w-[360px]"
          )}
        >
          <div className="flex flex-col items-center gap-y-6">
            <div className="h-[200px] w-[200px] bg-blue-400"></div>
            <h1>Бүртгэл амжилттай</h1>
            <p className="whitespace-pre-wrap text-center">{`You have been successfully registered.\nThank you. Have a nice day.`}</p>
          </div>
          <Link href="/auth/login">
            <a className="btn btn-primary normal-case">Цааш нэвтрэх</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
