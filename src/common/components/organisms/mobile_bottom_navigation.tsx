//
import Link from "next/link";
import { useRouter } from "next/router";

//
import { AppsIcon, BellIcon, HomeIcon } from "common/assets";
import { CustomLinkIconButton } from "common/components";
import { classNames } from "common/utils";

export const MobileBottomNavigation: React.FC = () => {
  const router = useRouter();

  const items = [
    {
      key: "home",
      href: "/",
      value: <HomeIcon />,
    },
    {
      key: "categories",
      href: "/categories",
      value: <AppsIcon />,
    },
    {
      key: "notifications",
      href: "/notifications",
      value: <BellIcon />,
    },
  ];

  return (
    <nav className="w-full rounded bg-white">
      <div className="flex items-center justify-between">
        {items.map(({ key, href, value }) => {
          const currentPath = router.pathname === href;
          return (
            <Link key={key} href={href}>
              <a className="flex w-full justify-center">
                <div
                  className={classNames(
                    "border-b-2 border-transparent fill-gray-300 py-4",
                    currentPath && "!border-primary fill-primary"
                  )}
                >
                  {value}
                </div>
              </a>
            </Link>
          );
        })}
        {/* <CustomLinkIconButton className="btn-ghost" href="/">
          <HomeIcon
            className={classNames("fill-gray-400", "hover:fill-primary")}
          />
        </CustomLinkIconButton>
        <CustomLinkIconButton className="btn-ghost" href="/categories">
          <AppsIcon
            className={classNames("fill-gray-400", "hover:fill-primary")}
          />
        </CustomLinkIconButton>
        <CustomLinkIconButton className="btn-ghost" href="/notifications">
          <BellIcon
            className={classNames("fill-gray-400", "hover:fill-primary")}
          />
        </CustomLinkIconButton> */}
      </div>
    </nav>
  );
};
