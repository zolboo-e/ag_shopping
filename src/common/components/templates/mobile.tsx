//
import type { FCC } from "react";
//
import {
  Drawer,
  IgnoreParentSize,
  MobileBottomNavigation,
  MobileHeader,
} from "common/components";

export const MobileLayout: FCC = ({ children }) => {
  return (
    <Drawer>
      <div className="px-5">
        <IgnoreParentSize className="sticky top-0">
          <MobileHeader />
        </IgnoreParentSize>
        <main className="py-5 pb-10">{children}</main>
        <div className="sticky bottom-5">
          <MobileBottomNavigation />
        </div>
      </div>
    </Drawer>
  );
};
