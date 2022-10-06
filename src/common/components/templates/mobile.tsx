//
import type { FCC } from "react";
//
import {
  Drawer,
  MobileBottomNavigation,
  MobileHeader,
} from "common/components";

export const MobileLayout: FCC = ({ children }) => {
  return (
    <Drawer>
      <div className="fixed top-0 z-10 w-full">
        <MobileHeader />
      </div>
      <main className="p-5" style={{ fontStretch: "condensed" }}>
        <div className="h-[68px]"></div>
        {children}
        <div className="h-[98px]"></div>
      </main>
      <div className="fixed bottom-5 z-10 w-full px-5">
        <MobileBottomNavigation />
      </div>
    </Drawer>
  );
};
