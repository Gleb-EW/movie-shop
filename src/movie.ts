export interface MovieOptions {
  id: number;
  title: string;
  titleEng: string;
  format: string;
  year: number;
  country: string;
  slogan: string;
  genre: string[];
  duration: string;
  price: number;
}

export class Movie {
  id: number;
  title: string;
  titleEng: string;
  format: string;
  year: number;
  country: string;
  slogan: string;
  genre: string[];
  duration: string;
  price: number;

  constructor(options: MovieOptions) {
    this.id = options.id;
    this.title = options.title;
    this.titleEng = options.titleEng;
    this.format = options.format;
    this.year = options.year;
    this.country = options.country;
    this.slogan = options.slogan;
    this.genre = options.genre;
    this.duration = options.duration;
    this.price = options.price;
  }

  getInfo(): string {
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
