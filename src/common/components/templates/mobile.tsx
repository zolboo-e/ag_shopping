//
import type { FCC } from "react";
//
import { Footer, MobileHeader } from "common/components";

export const MobileLayout: FCC = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MobileHeader />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};
