export class Menu {
    _id: string;
    name: string;
    description: string;
    price: string;
    category: string;

    constructor(id = '', name = '', description = '', price = '0', category = 'Food') {
      this._id = id
      this.name = name
      this.description = description
      this.price = price
      this.category = category

    }
}
