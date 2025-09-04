export interface Item {
  id: number;
  title: string;
  price: number;
}

export class Cart {
  private items: Item[] = [];

  add(item: Item): void {
    this.items.push(item);
  }

  remove(item: Item): void {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  removeById(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  getItems(): Item[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
    return this.getTotalPrice() * (1 - discount / 100);
  }

  getTotalCount(): number {
    return this.items.length;
  }
}
