export default class OrderItem {
  orderItemTotal() {
    throw new Error("Method not implemented.");
  }
  _id: string;
  _name: string;
  _price: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }
}
