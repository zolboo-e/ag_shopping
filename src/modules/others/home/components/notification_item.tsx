//
import type { ReactNode } from "react";

//
import { BellIcon, XIcon } from "common/assets/icons";
import { classNames } from "common/utils";

interface INotificationItem {
  content: ReactNode;
  hasSeen?: boolean;
  title: string;
}
export const NotificationItem: React.FC<INotificationItem> = ({
  content,
  hasSeen,
  title,
}) => {
  return (
    <div className="bg-white p-4">
      <div className="grid grid-cols-[auto,1fr,auto] grid-rows-[auto,auto] gap-x-4 gap-y-1">
        {/* icon */}
        <div
          className={classNames(
            "h-8 w-8 rounded-full bg-primary p-2",
            hasSeen && "bg-gray-100"
          )}
        >
          <BellIcon
            className={classNames(
              "h-full w-full fill-white",
              hasSeen && "fill-black"
            )}
          />
        </div>
        {/* title */}
        <div className="flex items-center">
          <h3>{title}</h3>
        </div>
        {/* close button */}
        <div className={classNames("h-6 w-6 rounded-full bg-gray-100 p-1.5")}>
          <XIcon className={classNames("h-full w-full fill-black")} />
        </div>
        {/* content */}
        <div className="col-start-2">{content}</div>
      </div>
    </div>
  );
};
