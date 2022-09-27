//
import type { NextPageWithLayout } from "next";
import { useRouter } from "next/router";

//
import { MobileSubLayout } from "common/components";
//

export const NotificationPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { notificationId } = router.query;
  return <div>{notificationId}</div>;
};
NotificationPage.getLayout = (page) => {
  return <MobileSubLayout>{page}</MobileSubLayout>;
};
