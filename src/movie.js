class Movie {
  /**
   * @param {Object} options
   * @param {number} options.id
   * @param {string} options.title
   * @param {string} options.titleEng
   * @param {string} options.format
   * @param {number} options.year
   * @param {string} options.country
   * @param {string} options.slogan
   * @param {string[]} options.genre
   * @param {string} options.duration
   * @param {number} options.price
   */
  constructor({ id, title, titleEng, format, year, country, slogan, genre, duration, price }) {
    this.id = id;
    this.title = title;
    this.titleEng = titleEng;
    this.format = format;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.duration = duration;
    this.price = price;
  }

  /**
   * Возвращает информацию о фильме
   * @returns {string}
   */
  getInfo() {
    return `
    ${this.title} (${this.titleEng}), ${this.format}
    Год: ${this.year}
    Страна: ${this.country}
    Слоган: "${this.slogan}"
    Жанр: ${this.genre.join(', ')}
    Время: ${this.duration}
    Цена: ${this.price}₽
    `;
  }
}

module.exports = Movie;
