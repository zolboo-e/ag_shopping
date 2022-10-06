//
import type { FCC, ReactNode } from "react";
//
import { IgnoreParentSize, MobileSubHeader } from "common/components";

interface IMobileSubLayout {
  header?: {
    backButton?: ReactNode | null;
    title?: string;
  };
}
export const MobileSubLayout: FCC<IMobileSubLayout> = ({
  children,
  header,
}) => {
  return (
    <div className="px-5">
      <IgnoreParentSize className="sticky top-0">
        <MobileSubHeader {...header} />
      </IgnoreParentSize>
      <main className="py-5 pb-10">{children}</main>
    </div>
  );
};
