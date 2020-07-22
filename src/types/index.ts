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
