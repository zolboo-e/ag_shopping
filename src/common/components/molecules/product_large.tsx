//
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
//
import type { IProduct } from "common/models";

export const ProductLarge: FC<IProduct> = ({ id, images, price, title }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [test, setTest] = useState(0);

  const scrollListener = () => {
    if (ref.current) {
      setTest(ref.current.scrollLeft);
    }
  };
  useEffect(() => {
    ref.current?.addEventListener("wheel", scrollListener);

    return ref.current?.removeEventListener("wheel", scrollListener);
  });

  return (
    <div>
      {/* carousel */}
      <div className="h-80 bg-background-secondary">
        <div className="carousel relative h-80 w-full" ref={ref}>
          {images.map((image, index) => (
            <div
              id={`${id}-image${index}`}
              key={`${id}-image${index}`}
              className="carousel-item"
            >
              <Image src={image} layout="fill" />
            </div>
          ))}
        </div>
      </div>
      {/* details */}
      <div className="bg-white px-5">
        {/* carousel indicator */}
        <div className="flex gap-x-1 py-5">
          {images.map((_, index) => (
            <button
              key={`${id}-image${index}`}
              className="h-1.5 w-1.5 rounded-full bg-primary"
              onClick={(event) => {
                event.preventDefault();
                if (ref.current) {
                  ref.current.scrollBy(100, 0);
                }
              }}
            />
          ))}
          <p>{test}</p>
        </div>
        <span className="font-medium">{title}</span>
        <p className="leading-snug text-[#a9b0bb]">#MotorOil</p>
        <p className="py-6 text-lg leading-none text-[#a9b0bb]">{price}</p>
      </div>
    </div>
  );
};
