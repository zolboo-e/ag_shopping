//
import type { NextPageWithLayout } from "next";
import Link from "next/link";

//
import { Logo } from "common/assets";
import { CustomButton, CustomLinkButton } from "common/components";
import { classNames } from "common/utils";

//

export const LoginPage: NextPageWithLayout = () => {
  // return (
  //   <div className="login-layout">
  //     <div className="h-full overflow-y-auto px-10">
  //       <div className={classNames("mx-auto w-full", "sm:max-w-[480px]")}>
  //         <LoginPageView />
  //       </div>
  //     </div>
  //     <div className="relative">
  //       <Image
  //         src="https://placeimg.com/1000/1000/people"
  //         layout="fill"
  //         objectFit="cover"
  //       />
  //     </div>
  //   </div>
  // );
  return (
    <div className="h-full overflow-y-auto px-10">
      <LoginPageView />
    </div>
  );
};

const LoginPageView: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between gap-y-24 py-10">
      {/* leading */}
      <div className="flex w-full flex-col items-center gap-y-12">
        {/* logo */}
        <Logo />
        {/* form */}
        <form className="flex w-full flex-col gap-y-8">
          <fieldset className="flex flex-col gap-y-4">
            <input
              className={classNames(
                "input bg-gray-200 pl-12 font-medium",
                "bg-[url('/assets/icons/person.svg')] bg-[length:48px_20px] bg-left bg-no-repeat bg-origin-padding"
              )}
              placeholder="Хэрэглэгчийн нэр"
            />
            <input
              className={classNames(
                "input bg-gray-200 pl-12 font-medium",
                "bg-[url('/assets/icons/lock.svg')] bg-[length:48px_20px] bg-left bg-no-repeat bg-origin-padding"
              )}
              placeholder="Нууц үг"
              type="password"
            />
          </fieldset>
          <CustomButton>{`Нэвтрэх`}</CustomButton>
          <div className="flex justify-center gap-x-1.5 text-gray-400">
            {`Нууц үг мартсан уу?`}
            <Link href="/auth/register">
              <a className="btn-link font-medium text-gray-500">Сэргээх</a>
            </Link>
          </div>
        </form>
      </div>
      {/* trailing */}
      <div className="flex w-full flex-col gap-y-2.5">
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
        <div className="divider"></div>
        <CustomLinkButton
          href="/auth/register"
          className="btn-ghost border-none bg-gray-200"
        >
          {`Бүртгэл үүсгэх`}
        </CustomLinkButton>
      </div>
    </div>
  );
};
