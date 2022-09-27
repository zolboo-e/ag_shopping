//

//
import { CartIcon, MenuIcon } from "common/assets/icons";
import { CustomIconButton, CustomLinkIconButton } from "common/components";
import { classNames } from "common/utils";

export const MobileHeader: React.FC = () => {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between px-2.5 py-2.5">
        <div className="flex items-center gap-x-2.5">
          <CustomIconButton className="btn-ghost">
            <MenuIcon
              className={classNames("fill-gray-300", "active:fill-primary")}
            />
          </CustomIconButton>
          <div className="h-8 w-8 rounded-full bg-primary"></div>
          <p>{`Test user`}</p>
        </div>

        <CustomLinkIconButton className="btn-ghost" href="">
          <CartIcon
            className={classNames("fill-gray-300", "active:fill-primary")}
          />
        </CustomLinkIconButton>
      </div>
    </header>
  );
};
