import { Cart, Item } from '../src/cart';

describe('Cart', () => {
  let cart: Cart;
  let item1: Item;
  let item2: Item;

  beforeEach(() => {
    cart = new Cart();
    item1 = { id: 1, title: 'Item 1', price: 100 };
    item2 = { id: 2, title: 'Item 2', price: 200 };
  });

  test('добавление и получение товаров', () => {
    cart.add(item1);
    cart.add(item2);
    expect(cart.getItems()).toEqual([item1, item2]);
  });

  test('удаление товара по объекту', () => {
    cart.add(item1);
    cart.add(item2);
    cart.remove(item1);
    expect(cart.getItems()).toEqual([item2]);
  });

  test('удаление товара по id', () => {
    cart.add(item1);
    cart.add(item2);
    cart.removeById(2);
    expect(cart.getItems()).toEqual([item1]);
  });

  test('расчёт общей цены', () => {
    cart.add(item1);
    cart.add(item2);
    expect(cart.getTotalPrice()).toBe(300);
    expect(cart.getTotalPriceWithDiscount(10)).toBe(270);
  });

  test('подсчёт количества товаров', () => {
    cart.add(item1);
    cart.add(item2);
    expect(cart.getTotalCount()).toBe(2);
  });
});
