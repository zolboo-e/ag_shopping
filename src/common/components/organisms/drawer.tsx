export const drawerKey = "my-drawer";
export const Drawer: React.FCC = ({ children }) => {
  return (
    <div className="drawer">
      <input id={drawerKey} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <DrawerMenu />
    </div>
  );
};
const DrawerMenu: React.FC = () => {
  return (
    <div className="drawer-side">
      <label htmlFor={drawerKey} className="drawer-overlay"></label>
      <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
        <li>
          <a>Drawer Item 1</a>
        </li>
        <li>
          <a>Drawer Item 2</a>
        </li>
      </ul>
    </div>
  );
};
