//
import type { ButtonHTMLAttributes } from "react";

//
import { classNames } from "common/utils";

interface ICustomIconButton {
  isLoading?: boolean;
}
export const CustomIconButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & ICustomIconButton
> = ({ children, className, isLoading, ...props }) => {
  return (
    <button
      className={classNames(
        "btn btn-square btn-primary",
        isLoading && "loading",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
