const Movie = require('../src/movie.js');

describe('Movie', () => {
  test('должен корректно создавать объект фильма', () => {
    const avengers = new Movie({
      title: 'Мстители',
      year: 2012,
      country: 'США',
      slogan: 'Avengers Assemble!',
      genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      duration: '137 мин. / 02:17'
    });

    expect(avengers.title).toBe('Мстители');
    expect(avengers.genre).toContain('боевик');
    expect(avengers.getInfo()).toMatch(/Мстители/);
  });
});
