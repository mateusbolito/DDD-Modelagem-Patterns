import OrderItem from "./order_item";

export default class Order {
  _id: string;
  _customerId: string;
  _items: OrderItem[] = [];

  constructor(_id: string, _customerId: string, items: OrderItem[]) {
    this._id = _id;
    this._customerId = _customerId;
    this._items = items;
  }
}
