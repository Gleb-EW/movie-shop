import { Movie } from '../src/movie';

describe('Movie', () => {
  test('создаёт объект фильма с правильными полями', () => {
    const avengers = new Movie(
      1,
      'Мстители',
      'The Avengers',
      'IMAX',
      2012,
      'США',
      'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      '137 мин. / 02:17',
      350
    );

    expect(avengers.title).toBe('Мстители');
    expect(avengers.titleEng).toBe('The Avengers');
    expect(avengers.price).toBe(350);
    expect(avengers.getInfo()).toMatch(/Мстители/);
  });

  test('фильм можно добавить в корзину', () => {
    const cart: Movie[] = [];
    const movie = new Movie(
      2,
      'Железный человек',
      'Iron Man',
      'IMAX',
      2008,
      'США',
      'Heroes aren’t born. They’re built.',
      ['фантастика', 'боевик'],
      '126 мин. / 02:06',
      299
    );

    cart.push(movie);

    expect(cart.length).toBe(1);
    expect(cart[0].title).toBe('Железный человек');
    expect(cart[0].price).toBe(299);
  });
});
