//
import { ArrowLeftIcon } from "common/assets";
import { IgnoreParentSize, MobileSubHeader } from "common/components";
import { classNames } from "common/utils";

export const drawerKey = "my-drawer";
export const Drawer: React.FCC = ({ children }) => {
  return (
    <div className="drawer">
      <input id={drawerKey} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <DrawerMenu />
      </div>
    </div>
  );
};
const DrawerMenu: React.FC = () => {
  return (
    <>
      <label htmlFor={drawerKey} className="drawer-overlay"></label>
      <div className="menu">
        <IgnoreParentSize className="sticky top-0 z-10">
          <MobileSubHeader
            backButton={
              <label
                htmlFor={drawerKey}
                className="btn btn-ghost absolute left-5 bg-gray-100"
              >
                <ArrowLeftIcon className="fill-black" />
              </label>
            }
            title="Нийт ангилал"
          />
        </IgnoreParentSize>
        <div className="flex flex-col gap-y-4 overflow-y-auto bg-white px-5 py-5">
          {items.map((child) => {
            return (
              <div key={child.key} className="rounded border-2 border-gray-200">
                <TestItem {...child} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

interface ITestItem {
  children: ITestItem[];
  key: string;
  layer?: number;
  title: string;
}
const TestItem: React.FC<ITestItem> = ({ children, layer = 0, title }) => {
  return (
    <div
      className={classNames(
        "peer collapse collapse-plus bg-white",
        layer === 1 && "first:border-t-2"
      )}
    >
      <input type="checkbox" />
      <div
        className={classNames(
          "collapse-title text-xl font-medium",
          layer > 0 && "pl-0",
          layer > 0 && "after:!right-0",
          layer > 0 && "border-b-2 border-gray-200"
        )}
      >
        {title}
      </div>
      <div
        className={classNames("collapse-content pr-0", layer === 0 && "mr-5")}
      >
        {children.length !== 0 ? (
          children.map(({ key, ...rest }) => (
            <TestItem layer={layer + 1} key={key} {...rest} />
          ))
        ) : (
          <p>{`We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.`}</p>
        )}
      </div>
    </div>
  );
};

const items: ITestItem[] = [
  {
    key: "accessories",
    title: "Аксессүар",
    children: [
      {
        key: "electrics",
        title: "Electrics",
        children: [],
      },
      {
        key: "auto_detail",
        title: "Auto Detail",
        children: [],
      },
      {
        key: "steering",
        title: "Steering",
        children: [
          {
            key: "suspension",
            title: "Suspension",
            children: [],
          },
          {
            key: "auto_detail",
            title: "Auto Detail",
            children: [],
          },
          {
            key: "windscreen",
            title: "Windscreen",
            children: [],
          },
        ],
      },
      {
        key: "suspension",
        title: "Suspension",
        children: [],
      },
      {
        key: "dumpings",
        title: "Dumpings",
        children: [],
      },
    ],
  },
  {
    key: "braking_system",
    title: "Тормосны систем",
    children: [],
  },
  {
    key: "filter",
    title: "Шүүлтүүр",
    children: [],
  },
  {
    key: "axis",
    title: "Тэнхлэг",
    children: [],
  },
  {
    key: "driving_system",
    title: "Жолооны удирдлага",
    children: [],
  },
  {
    key: "braking_system_1",
    title: "Тормосны систем",
    children: [],
  },
  {
    key: "tires",
    title: "Дугуй",
    children: [],
  },
  {
    key: "driving_system_1",
    title: "Жолооны хүрд",
    children: [],
  },
  {
    key: "oil",
    title: "Тос тосолгоо",
    children: [],
  },
  {
    key: "interior",
    title: "Дотоод тоног",
    children: [],
  },
  {
    key: "heating",
    title: "Очлуур, Халаагч",
    children: [],
  },
];
