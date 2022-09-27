//
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import type { NextPageWithLayout } from "next";
import Image from "next/image";
import Link from "next/link";

//
import { classNames } from "common/utils";

//

export const RegisterPage: NextPageWithLayout = () => {
  return (
    <div className="login-layout">
      <div className="h-full overflow-y-auto px-10">
        <div className={classNames("mx-auto w-full", "sm:max-w-[480px]")}>
          <RegisterPageView />
        </div>
      </div>
      <div className="relative">
        <Image
          src="https://placeimg.com/1000/1000/people"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

const RegisterPageView: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center gap-y-12 py-10">
      {/* header */}
      {/* <div
        className={classNames(
          "flex w-full items-center justify-between",
          "lg:hidden"
        )}
      >
        <Link href="">
          <a className="btn btn-ghost btn-square bg-gray-100 text-black">
            <ArrowSmLeftIcon className="h-8 w-8" />
          </a>
        </Link>
        <h1>Бүртгэл үүсгэх</h1>
        <div className="h-8 w-8"></div>
      </div> */}
      {/* logo */}
      <p className="whitespace-pre-wrap text-center">{`Та өөрийн дэлгэрэнгүй мэдээллээ\nоруулна уу.`}</p>
      {/* form */}
      <form className="flex w-full flex-col gap-y-8">
        <fieldset className="flex flex-col gap-y-4">
          <input
            className={classNames("input bg-gray-100")}
            placeholder="Овог нэр"
          />
          <input
            className={classNames("input bg-gray-100")}
            placeholder="Утасны дугаар"
          />
          <input
            className={classNames("input bg-gray-100")}
            placeholder="Цахим шуудан"
          />
          <input
            className={classNames("input bg-gray-100")}
            placeholder="Нууц үг оруулах"
            type="password"
          />
          <input
            className={classNames("input bg-gray-100")}
            placeholder="Нууц үг давтан оруулах"
            type="password"
          />
        </fieldset>
        {/* <button className="btn btn-primary normal-case">Бүртгэл үүсгэх</button> */}
        <Link href="/auth/register_success">
          <a className="btn btn-primary normal-case">{`Бүртгэл үүсгэх`}</a>
        </Link>
        <div className="whitespace-pre-wrap text-center text-gray-400">
          By signing up, you agree to our {}
          <Link href="/auth/register">
            <a className="btn-link font-medium text-gray-500">
              {`Privacy Policy`}
            </a>
          </Link>
          , {`\n`}
          <Link href="/auth/register">
            <a className="btn-link font-medium text-gray-500">
              {`Cookie Policy`}
            </a>
          </Link>
          {} and {}
          <Link href="/auth/register">
            <a className="btn-link font-medium text-gray-500">
              {`Terms of Use`}
            </a>
          </Link>
          .
        </div>
      </form>
    </div>
  );
};
