//
import { useRouter } from "next/router";

//
import { ArrowLeftIcon } from "common/assets/icons";
import { CustomIconButton } from "common/components";
import { classNames } from "common/utils";

export const MobileSubHeader: React.FC = () => {
  const router = useRouter();

  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between p-5">
        <CustomIconButton
          className="btn-ghost btn-sm bg-gray-100"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon className="fill-black" />
        </CustomIconButton>

        <div className="flex items-center justify-center">{`Notification`}</div>
        <div className="invisible w-10"></div>
      </div>
    </header>
  );
};
