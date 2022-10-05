import { classNames } from "common/utils";

interface ISectionTitle {
  hasDecoration?: boolean;
  subtitle: string;
  title: string;
}
export const SectionTitleMobile: React.FC<ISectionTitle> = ({
  hasDecoration = true,
  subtitle,
  title,
}) => {
  return (
    <div
      className={classNames(
        "flex gap-x-4",
        hasDecoration && "before:h-auto before:w-[2px] before:bg-gray-200"
      )}
    >
      <div className="flex flex-col gap-x-1">
        <h2 className="font-medium">{title}</h2>
        <small className="text-gray-300">{subtitle}</small>
      </div>
    </div>
  );
};
