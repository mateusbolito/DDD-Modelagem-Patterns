import Adress from "../../../domain/entity/adress";
import CustomerFactory from "../../../domain/factory/customer.factory";

const customer = CustomerFactory.createWithAddress(
  "john",
  new Adress("street", 123, "zip", "City")
);

const input = {
  id: customer.id,
  name: "John updated",
  addres: {
    street: "street updated",
    number: 1234,
    zip: "zip updated",
    city: "city updated",
  },
};

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(customer)),
    updated: jest.fn(),
  };
};

describe("unit test for customer update  use case", () => {
  it("should update a customer", async () => {
    const customerRepository = MockRepository();
    const customerUpdateUseCase = new UpdateCustomerUseCase(customerRepository);

    const output = await customerUpdateUseCase.execute(input);

    expect(output).toEqual(input);
  });
});
