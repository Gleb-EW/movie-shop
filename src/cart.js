class Cart {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
  }

  getTotalCount() {
    return this.items.length;
  }
}

module.exports = Cart;
