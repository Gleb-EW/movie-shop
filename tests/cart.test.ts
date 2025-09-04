import { Cart, Item } from '../src/cart';

describe('Cart', () => {
  test('добавление товара в корзину', () => {
    const cart = new Cart();
    const item: Item = { id: 1, name: 'Товар 1', price: 100 };
    cart.add(item);

    expect(cart.getItems().length).toBe(1);
    expect(cart.getItems()[0].name).toBe('Товар 1');
    expect(cart.getItems()[0].price).toBe(100);
  });

  test('подсчёт общей стоимости', () => {
    const cart = new Cart();
    cart.add({ id: 1, name: 'Товар 1', price: 100 });
    cart.add({ id: 2, name: 'Товар 2', price: 200 });

    expect(cart.getTotal()).toBe(300);
  });

  test('очистка корзины', () => {
    const cart = new Cart();
    cart.add({ id: 1, name: 'Товар 1', price: 100 });
    cart.clear();

    expect(cart.getItems().length).toBe(0);
  });
});
