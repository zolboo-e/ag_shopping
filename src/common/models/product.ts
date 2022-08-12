//
import { removeUndefinedFromObject } from "common/utils";

export interface IProduct {
  id: string;
  images: string[];
  price: number;
  title: string;
}
interface IProductDto {
  id: number;
  images: string[];
  price: number;
  title: string;
}

export class Product implements IProduct {
  readonly id!: string;
  readonly images: string[] = [];
  readonly price: number = 0;
  readonly title: string = "";

  constructor(partial: Partial<IProduct> = {}) {
    Object.assign(this, removeUndefinedFromObject(partial));
  }

  static fromJson = (json: IProductDto) => {
    return new Product({
      id: `${json.id}`,
      images: json.images,
      price: json.price,
      title: json.title,
    });
  };
}
