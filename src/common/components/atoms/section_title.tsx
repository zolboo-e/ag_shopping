//
import type { FC } from "react";
//
import { classNames } from "common/utils";

interface ISectionTitle {
  title: string;
}
export const SectionTitle: FC<ISectionTitle> = ({ title }) => {
  return (
    <span
      className={classNames(
        "flex items-center gap-x-4 text-xl leading-none",
        "before:h-0 before:w-0 before:border-b-[16px] before:border-r-[16px] before:border-transparent before:border-r-primary"
      )}
    >
      {title}
    </span>
  );
};
