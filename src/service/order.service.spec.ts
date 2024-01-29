import Order from "../entity/order";
import OrderItem from "../entity/order_item";

describe("orderService unit test", () => {
  it("should get total off all orders", () => {
    const item1 = new OrderItem("1", "Item1", 100, "p1", 1);
    const item2 = new OrderItem("1", "Item1", 100, "p1", 1);

    const order = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c2", [item2]);
    const total = orderService.total([order, order2]);

    expect(total).toBe(500);
  });
});
