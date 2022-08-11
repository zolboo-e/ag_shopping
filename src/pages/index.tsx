//
import type { NextPageWithLayout } from "next";
//
import { MainLayout } from "common/components";

const HomePage: NextPageWithLayout = () => {
  return <div className="container mx-auto pb-40"></div>;
};
HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;
