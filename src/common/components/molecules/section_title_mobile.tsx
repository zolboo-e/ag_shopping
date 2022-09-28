import { classNames } from "common/utils";

interface ISectionTitle {
  subtitle: string;
  title: string;
}
export const SectionTitleMobile: React.FC<ISectionTitle> = ({
  subtitle,
  title,
}) => {
  return (
    <div
      className={classNames(
        "flex gap-x-4",
        "before:h-auto before:w-[2px] before:bg-gray-200"
      )}
    >
      <div className="flex flex-col gap-x-1">
        <h2>{title}</h2>
        <small className="text-gray-300">{subtitle}</small>
      </div>
    </div>
  );
};
