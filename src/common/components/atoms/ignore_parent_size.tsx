//
import type { FCC, HTMLAttributes } from "react";
//
import { classNames } from "common/utils";

export const IgnoreParentSize: FCC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("-mx-[calc(50vw-50%)] bg-[#292d33]", className)}>
      {children}
    </div>
  );
};
