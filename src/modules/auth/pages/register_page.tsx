//
import type { NextPageWithLayout } from "next";
import Image from "next/image";
import Link from "next/link";

//
import { CustomLinkButton } from "common/components";
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
    <div className="flex min-h-screen w-full flex-col items-center gap-y-24 py-10">
      {/* leading */}
      <div className="flex w-full flex-col items-center gap-y-12">
        {/* logo */}
        <p className="whitespace-pre-wrap text-center">{`Та өөрийн дэлгэрэнгүй мэдээллээ\nоруулна уу.`}</p>
        {/* form */}
        <form className="flex w-full flex-col gap-y-8">
          <fieldset className="flex flex-col gap-y-4">
            <input
              className={classNames("input bg-gray-200 font-medium")}
              placeholder="Овог нэр"
            />
            <input
              className={classNames("input bg-gray-200 font-medium")}
              placeholder="Утасны дугаар"
            />
            <input
              className={classNames("input bg-gray-200 font-medium")}
              placeholder="Цахим шуудан"
            />
            <input
              className={classNames("input bg-gray-200 font-medium")}
              placeholder="Нууц үг оруулах"
              type="password"
            />
            <input
              className={classNames("input bg-gray-200 font-medium")}
              placeholder="Нууц үг давтан оруулах"
              type="password"
            />
          </fieldset>
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
          <Link href="/auth/register_success">
            <a className="btn btn-primary normal-case">{`Бүртгэл үүсгэх`}</a>
          </Link>
        </form>
      </div>
      {/* trailing */}
      <div className="flex w-full flex-col gap-y-2.5">
        <div className="divider"></div>
        <CustomLinkButton
          href="/auth/login"
          className="btn-ghost border-none bg-gray-200"
        >
          {`Нэвтрэх`}
        </CustomLinkButton>
        <CustomLinkButton href="/" className="border-none bg-black">
          {`Log in with Apple`}
        </CustomLinkButton>
        <CustomLinkButton href="/" className="border-none bg-[#3b5998]">
          {`Log in with Facebook`}
        </CustomLinkButton>
        <CustomLinkButton
          href="/"
          className="btn-ghost border-gray-200 bg-transparent"
        >
          {`Login as guest`}
        </CustomLinkButton>
      </div>
    </div>
  );
};
