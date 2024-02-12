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
