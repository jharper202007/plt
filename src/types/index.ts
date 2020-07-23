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

export const colours : Colour[] = Object.values(Colour);

export function isColour(value: string): value is Colour {
  return colours.includes(value as Colour);
}

export enum ProductFilterTypes {
  Colour = 'colour'
}

export type ProductFilterValues = Colour;

export interface Filter {
  type: ProductFilterTypes;
  value?: ProductFilterValues;
}

export interface BasketItemData {
  quantity: number;
  price: number;
}

export interface BasketItem extends BasketItemData {
  productId: number;
}
