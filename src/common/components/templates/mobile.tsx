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
      <div className="fixed top-0 w-full">
        <MobileHeader />
      </div>
      <main className="p-5">
        <div className="h-[68px]"></div>
        {children}
        <div className="h-[98px]"></div>
      </main>
      <div className="fixed bottom-5 w-full px-5">
        <MobileBottomNavigation />
      </div>
    </Drawer>
  );
};
