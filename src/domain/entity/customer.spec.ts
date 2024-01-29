import Adress from "./adress";
import Customer from "./customer";

describe("costumer unit tests", () => {
  it("should thow error when id empty", () => {
    expect(() => {
      let costomer = new Customer("", "mateus");
    }).not.toThrow("ID is required");
  });

  it("should throw error when name empty", () => {
    expect(() => {
      let costomer = new Customer("123", "");
    }).not.toThrow("Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("123", "mateus");
    customer.changeName("pablo");

    expect(customer.name).toBe("pablo");
  });

  it("should activate customer ", () => {
    const customer = new Customer("1", "customer 1");
    const adress = new Adress("Street 1", 123, "1121-90", "sinop mt");
    customer.Adres = adress;

    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it("should deactivete customer ", () => {
    const customer = new Customer("1", "customer 1");

    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });

  it("should throw error when adrres is undefined when activate a customer ", () => {
    expect(() => {
      const customer = new Customer("1", "customer 1");
      customer.activate();
    }).not.toThrow("adrres is mandatory to activate costumer");
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
