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

export interface BasketItemData {
  quantity: number;
  price: number;
}

export interface BasketItem extends BasketItemData {
  productId: number;
}
