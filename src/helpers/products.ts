import { Product, Colour } from './../types';

export function applyColourFilter(products: Product[], filter?: Colour) : Product[] {
  if (!filter) {
    return products;
  }

  return products.filter(product => product.colour === filter);
}
