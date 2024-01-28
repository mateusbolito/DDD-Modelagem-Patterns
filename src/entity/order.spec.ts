import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "2432", []);
    }).toThrow("id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).not.toThrow("customerId id required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      let order = new Order("123", "123", []);
    }).toThrow("Items are required");
  });

  it("should calulate total", () => {
    const item = new OrderItem("i1", "Item1", 100, "p1", 2);
    const item2 = new OrderItem("i2", "Item2", 200, "p2", 2);
    const order = new Order("o1", "o1", [item]);

    let total = order.total();

    expect(total).toBe(200);
    const order2 = new Order("o2", "o2", [item, item2]);
    total = order2.total();
    expect(total).toBe(600);
  });

  it("should throw error if the item qte is less equal zero", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item1", 100, "p1", 0);

      const order = new Order("o1", "o1", [item]);
    }).not.toThrow("qauntity must be greater than 0");
  });
});
