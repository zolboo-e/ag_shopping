//
import { useRouter } from "next/router";
import type { ReactNode } from "react";

//
import { ArrowLeftIcon } from "common/assets";
import { CustomIconButton } from "common/components";
import { classNames } from "common/utils";

interface IMobileSubHeader {
  backButton?: ReactNode | null;
  title?: string;
}
export const MobileSubHeader: React.FC<IMobileSubHeader> = ({
  backButton,
  title,
}) => {
  const router = useRouter();

  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-center p-5">
        {backButton !== null &&
          (backButton === undefined ? (
            <CustomIconButton
              className="btn-ghost absolute left-5 bg-gray-100"
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className="fill-black" />
            </CustomIconButton>
          ) : (
            backButton
          ))}
        {title && (
          <div className="flex items-center justify-center font-medium">
            {title}
          </div>
        )}
      </div>
    </header>
  );
};
