import { Movie } from '../src/movie';

describe('Movie', () => {
  test('создаёт объект фильма с правильными полями', () => {
    const avengers = new Movie({
      id: 1,
      title: 'Мстители',
      titleEng: 'The Avengers',
      format: 'IMAX',
      year: 2012,
      country: 'США',
      slogan: 'Avengers Assemble!',
      genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      duration: '137 мин. / 02:17',
      price: 350
    });

    expect(avengers.title).toBe('Мстители');
    expect(avengers.titleEng).toBe('The Avengers');
    expect(avengers.format).toBe('IMAX');
    expect(avengers.year).toBe(2012);
    expect(avengers.genre).toContain('боевик');
    expect(avengers.price).toBe(350);
    expect(avengers.getInfo()).toMatch(/Мстители/);
  });

  test('фильм можно добавить в корзину', () => {
    const cart: Movie[] = [];
    const movie = new Movie({
      id: 2,
      title: 'Железный человек',
      titleEng: 'Iron Man',
      format: 'IMAX',
      year: 2008,
      country: 'США',
      slogan: 'Heroes aren’t born. They’re built.',
      genre: ['фантастика', 'боевик'],
      duration: '126 мин. / 02:06',
      price: 299
    });

    cart.push(movie);

    expect(cart.length).toBe(1);
    expect(cart[0].title).toBe('Железный человек');
    expect(cart[0].price).toBe(299);
  });
});
