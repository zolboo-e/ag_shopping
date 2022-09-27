//
import type { ButtonHTMLAttributes } from "react";

//
import { classNames } from "common/utils";

interface ICustomButton {
  isLoading?: boolean;
}
export const CustomButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & ICustomButton
> = ({ children, className, isLoading, ...props }) => {
  return (
    <button
      className={classNames(
        "btn btn-primary normal-case",
        isLoading && "loading",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
