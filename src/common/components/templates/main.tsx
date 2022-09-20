//
import type { FCC } from "react";
//
import {
  ExternalNavigation,
  Footer,
  Header,
  InternalNavigation,
} from "common/components";

export const MainLayout: FCC = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ExternalNavigation current="shopping" />
      <Header />
      <InternalNavigation current="all" />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};
