export interface MovieOptions {
  readonly id: number;
  readonly title: string;
  readonly titleEng: string;
  readonly format: string;
  readonly year: number;
  readonly country: string;
  readonly slogan: string;
  readonly genre: string[];
  readonly duration: string;
  readonly price: number;
}

export class Movie {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly titleEng: string,
    readonly format: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string[],
    readonly duration: string,
    readonly price: number
  ) {}

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
