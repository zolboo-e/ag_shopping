//
import Image from "next/image";
import type { FC } from "react";
//
import { CustomButton } from "common/components";
import type { IProduct } from "common/models";

export const ProductSmallMobile: FC<
  Omit<IProduct, "images"> & { image: string }
> = ({ id, image, price, title }) => {
  return (
    <div className="rounded bg-white p-5">
      <div className="flex flex-col gap-y-5">
        <div className="relative w-full">
          <div className="aspect-1">
            <Image
              src={image}
              layout="fill"
              objectFit="contain"
              alt="product"
            />
          </div>
        </div>
        <div>
          <h3>{title}</h3>
          <small>{`#MotorOil`}</small>
        </div>
        <p>{price}</p>
        <CustomButton>{`Сагслах`}</CustomButton>
      </div>
    </div>
  );
};
