//
import type { NextPageWithLayout } from "next";

//
import { MainLayout } from "common/components";
import { NotificationItem } from "modules/notifications/components";

//

export const NotificationsPage: NextPageWithLayout = () => {
  return (
    <div>
      <ul className="flex flex-col gap-y-4">
        {Array.from(Array(20).keys()).map((item) => (
          <li key={item}>
            <NotificationItem
              content={`Most of the people you’ll meet will mostly already a part of a friend group.`}
              hasSeen={item > 1}
              id={`${item}`}
              title={`Notification`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
NotificationsPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
