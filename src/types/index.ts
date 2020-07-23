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

// Unused but here to demonstrate what could happen
// if there were additional types of filters
export enum Size {
  Xs = 'Xs',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export type ProductFilterTypes = 'colour'|'size';
export type ProductFilterValues = Colour|Size;

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
