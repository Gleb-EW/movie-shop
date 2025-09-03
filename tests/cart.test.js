const Movie = require('../src/movie.js');
const Cart = require('../src/cart.js');

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('можно добавлять предметы в корзину', () => {
    const movie = new Movie({ title: 'Мстители', year: 2012 });
    cart.add(movie);

    expect(cart.getTotalCount()).toBe(1);
    expect(cart.getItems()[0].title).toBe('Мстители');
  });

  test('можно удалять предметы из корзины', () => {
    const movie = new Movie({ title: 'Мстители', year: 2012 });
    cart.add(movie);
    cart.remove(movie);

    expect(cart.getTotalCount()).toBe(0);
  });

  test('корзина корректно хранит несколько предметов', () => {
    const movie1 = new Movie({ title: 'Мстители', year: 2012 });
    const movie2 = new Movie({ title: 'Железный человек', year: 2008 });

    cart.add(movie1);
    cart.add(movie2);

    expect(cart.getTotalCount()).toBe(2);
    expect(cart.getItems().map(i => i.title)).toEqual(['Мстители', 'Железный человек']);
  });
});
