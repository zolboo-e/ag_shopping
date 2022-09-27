//
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import type { UrlObject } from "url";

//
import { classNames } from "common/utils";

interface ICustomLinkButton {
  href: string | UrlObject;
}
export const CustomLinkButton: React.FC<
  AnchorHTMLAttributes<HTMLAnchorElement> & ICustomLinkButton
> = ({ children, className, href, ...props }) => {
  return (
    <Link href={href}>
      <a
        className={classNames("btn bg-primary normal-case", className)}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};
