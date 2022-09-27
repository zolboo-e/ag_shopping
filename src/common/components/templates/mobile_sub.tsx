//
import type { FCC } from "react";
//
import { IgnoreParentSize, MobileSubHeader } from "common/components";

export const MobileSubLayout: FCC = ({ children }) => {
  return (
    <div className="px-5">
      <IgnoreParentSize className="sticky top-0">
        <MobileSubHeader />
      </IgnoreParentSize>
      <main className="py-5 pb-10">{children}</main>
    </div>
  );
};
