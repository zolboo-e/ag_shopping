//
import Image from "next/image";
import type { FC } from "react";
//
import type { IService } from "common/models";

export const ServiceLarge: FC<IService> = ({
  description,
  id,
  image,
  title,
}) => {
  return (
    <div>
      {/* image */}
      <div className="relative h-[372px] w-full">
        <Image src={image} layout="fill" />
      </div>

      {/* details */}
      <div className="flex flex-col gap-y-5 bg-white p-6">
        <span className="font-medium">{title}</span>
        <p className="text-sm text-[#a9b0bb]">{description}</p>
      </div>
    </div>
  );
};
