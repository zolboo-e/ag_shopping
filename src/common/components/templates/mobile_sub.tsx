//
import type { FCC } from "react";
//
import { IgnoreParentSize, MobileSubHeader } from "common/components";

interface IMobileSubLayout {
  title?: string;
}
export const MobileSubLayout: FCC<IMobileSubLayout> = ({ children, title }) => {
  return (
    <div className="px-5">
      <IgnoreParentSize className="sticky top-0">
        <MobileSubHeader title={title} />
      </IgnoreParentSize>
      <main className="py-5 pb-10">{children}</main>
    </div>
  );
};
