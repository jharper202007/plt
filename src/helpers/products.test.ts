import { applyColourFilter } from './products';
import { Product, Colour } from './../types';

const exampleProducts : Product[] = [
  {
    id: 1,
    name: 'Example product 1',
    img: 'https://example.com/test.png',
    colour: Colour.Black,
    price: 1
  },
  {
    id: 2,
    name: 'Example product 2',
    img: 'https://example.com/test2.png',
    colour: Colour.Stone,
    price: 2
  },
  {
    id: 3,
    name: 'Example product 3',
    img: 'https://example.com/test3.png',
    colour: Colour.Black,
    price: 3
  },
  {
    id: 4,
    name: 'Example product 4',
    img: 'https://example.com/test4.png',
    colour: Colour.Red,
    price: 5
  }
];

describe('Product helpers', () => {
  it('Applies colour filter to array of products', () => {
    const filtered = applyColourFilter(exampleProducts, Colour.Black);
    expect(filtered.length).toEqual(2);
    expect(filtered.map(product => product.id)).toEqual([1,3]);

    const nonFiltered = applyColourFilter(exampleProducts, undefined);
    expect(nonFiltered.length).toEqual(4);
    expect(nonFiltered).toEqual(exampleProducts);
  });
});
