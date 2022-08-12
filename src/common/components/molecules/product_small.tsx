//
import Image from "next/image";
import type { FC } from "react";
//
import type { IProduct } from "common/models";

export const ProductSmall: FC<Omit<IProduct, "images"> & { image: string }> = ({
  id,
  image,
  price,
  title,
}) => {
  return (
    <div className="grid h-[125px] grid-cols-[80px,auto]">
      {/* image */}
      <div className="relative h-[125px] w-20">
        <Image src={image} layout="fill" />
      </div>
      {/* details */}
      <div className="flex flex-col justify-between bg-white p-5">
        <div>
          <span className="font-medium line-clamp-1">{title}</span>
          <p className="text-[#a9b0bb]">#MotorOil</p>
        </div>
        <p className="text-lg text-[#a9b0bb]">{price}</p>
      </div>
    </div>
  );
};
