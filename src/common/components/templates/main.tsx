//
import type { FCC } from "react";
//
import {
  IgnoreParentSize,
  MobileBottomNavigation,
  MobileHeader,
} from "common/components";

export const MainLayout: FCC = ({ children }) => {
  return (
    <div className="min-h-screen px-5">
      <IgnoreParentSize className="sticky top-0">
        <MobileHeader />
      </IgnoreParentSize>
      <main className="py-5 pb-10">{children}</main>
      <div className="sticky bottom-5">
        <MobileBottomNavigation />
      </div>
    </div>
  );
  // return (
  //   <div className="flex min-h-screen flex-col bg-background">
  //     <ExternalNavigation current="shopping" />
  //     <Header />
  //     <InternalNavigation current="all" />
  //     <main className="grow">{children}</main>
  //     <Footer />
  //   </div>
  // );
};
