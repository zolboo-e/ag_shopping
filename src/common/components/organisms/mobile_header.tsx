//

//
import { CartIcon, MenuIcon } from "common/assets/icons";
import { CustomLinkIconButton, drawerKey } from "common/components";

export const MobileHeader: React.FC = () => {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center gap-x-2.5 px-2.5 py-2.5">
        <label
          htmlFor={drawerKey}
          className="btn btn-square btn-ghost drawer-button"
        >
          <MenuIcon className="fill-gray-300" />
        </label>
        <div className="h-8 w-8 rounded-full bg-primary"></div>
        <p>{`Test user`}</p>

        <CustomLinkIconButton
          className="btn-ghost absolute right-2.5"
          href="/cart"
        >
          <CartIcon className="fill-gray-300" />
        </CustomLinkIconButton>
      </div>
    </header>
  );
};
