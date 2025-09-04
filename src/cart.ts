export interface Item {
  readonly id: number;
  readonly name: string;
  readonly price: number;
}

export class Cart {
  private items: Item[] = [];

  add(item: Item): void {
    this.items.push(item);
  }

  getItems(): Item[] {
    return [...this.items];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  clear(): void {
    this.items = [];
  }
}
