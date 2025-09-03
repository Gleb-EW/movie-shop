class Movie {
  constructor({ title, year, country, slogan, genre, duration }) {
    this.title = title;
    this.year = year;
    this.country = country || 'Неизвестно';
    this.slogan = slogan || '';
    this.genre = genre || [];
    this.duration = duration || '';
  }

  getInfo() {
    return `
${this.title} (${this.year})
Страна: ${this.country}
Слоган: ${this.slogan}
Жанр: ${this.genre.join(', ')}
Время: ${this.duration}
`;
  }
}

module.exports = Movie;
