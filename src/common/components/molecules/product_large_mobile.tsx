//
import Image from "next/image";
import type { FC } from "react";

//
import { CustomButton } from "common/components";
import type { IProduct } from "common/models";

export const ProductLargeMobile: FC<
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
          <h3 className="font-medium">{title}</h3>
          <small className="text-gray-300">{`#MotorOil`}</small>
        </div>
        <div className="font-semibold text-primary">
          {price.toLocaleString().replace(/,/g, "'")}
        </div>
        <CustomButton>{`Сагслах`}</CustomButton>
      </div>
    </div>
  );
};
