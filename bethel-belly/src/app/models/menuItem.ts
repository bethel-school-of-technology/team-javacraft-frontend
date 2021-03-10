export class MenuItem {
    id!: number;
    name!: string;
    description!: Array<String>;
    price!: number;
// constructor for menu items to be handled in API
    constructor(id = 1, name = '', description = [''], price = 0) {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
    }

}
