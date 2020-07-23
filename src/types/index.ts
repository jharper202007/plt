export interface Product {
  id: number;
  colour: Colour;
  name: string;
  price: number;
  img: string;
}

export enum Colour {
  Black = 'Black',
  Stone = 'Stone',
  Red = 'Red'
}
export type ProductFilterTypes = 'colour';
export type ProductFilterValues = Colour;

export interface Filter {
  type: ProductFilterTypes;
  value: ProductFilterValues;
}

export interface BasketItemData {
  quantity: number;
  price: number;
}

export interface BasketItem extends BasketItemData {
  productId: number;
}
