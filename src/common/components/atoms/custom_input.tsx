//
import type { InputHTMLAttributes } from "react";

//
import { classNames } from "common/utils";

interface ICustomInput {
  error?: string;
  label?: string;
}
export const CustomInput: React.FC<
  InputHTMLAttributes<HTMLInputElement> & ICustomInput
> = ({ className, error, label, ...props }) => {
  return (
    <div className="form-control">
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}
      <input
        className={classNames(
          "input input-bordered",
          error && "input-error",
          className
        )}
        {...props}
      />
      {error && (
        <label className="label">
          <span className="label-text text-error">{error}</span>
        </label>
      )}
    </div>
  );
};
