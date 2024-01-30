import Customer from "../../domain/entity/customer";
import CustomerModel from "../db/sequelize/model/customer.model";
import Adress from "../../domain/entity/adress";
import CustomerRepositoryInterface from "../../domain/repository/customer-repository.interface";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    const adrres = entity.Address;
    if (adrres) {
      await CustomerModel.create({
        id: entity.id,
        name: entity.name,
        street: entity.Address.street,
        number: entity.Address.number,
        zipcode: entity.Address.zip,
        city: entity.Address.city,
        active: entity.isActive(),
        rewardPoints: entity.rewardPoints,
      });
    } else {
      throw new Error("addres not implemented");
    }
  }

  async update(entity: Customer): Promise<void> {
    await CustomerModel.update(
      {
        name: entity.name,
        street: entity.Address.street,
        number: entity.Address.number,
        zipcode: entity.Address.zip,
        city: entity.Address.city,
        active: entity.isActive(),
        rewardPoints: entity.rewardPoints,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }

  async find(id: string): Promise<Customer> {
    let customerModel;
    try {
      customerModel = await CustomerModel.findOne({
        where: {
          id,
        },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("Customer not found");
    }

    const customer = new Customer(id, customerModel.name);
    const address = new Adress(
      customerModel.street,
      customerModel.number,
      customerModel.zipcode,
      customerModel.city
    );
    customer.changeAddress(address);
    return customer;
  }

  async findAll(): Promise<Customer[]> {
    const customerModels = await CustomerModel.findAll();

    const customers = customerModels.map(
      (customerModels: {
        id: any;
        name: any;
        rewardPoints: any;
        street: any;
        number: any;
        zipcode: any;
        city: any;
        active: any;
      }) => {
        let customer = new Customer(customerModels.id, customerModels.name);
        customer.addRewardPoints(customerModels.rewardPoints);
        const address = new Adress(
          customerModels.street,
          customerModels.number,
          customerModels.zipcode,
          customerModels.city
        );
        customer.changeAddress(address);
        if (customerModels.active) {
          customer.activate();
        }
        return customer;
      }
    );

    return customers;
  }
}
