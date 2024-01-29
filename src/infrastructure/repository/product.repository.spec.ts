import { DataTypes, Sequelize } from "sequelize";
import ProductModel from "../db/sequelize/model/product.model";
import Product from "../../domain/entity/product";
import ProductRepository from "./product.repository";
import { DataType } from "sequelize-typescript";

describe("Product repository tests", () => {
  let sequelize: Sequelize;
  let Product: any;
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    Product = sequelize.define<ProductModel>("Product", {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: {
        type: DataType.STRING,
      },
      price: {
        type: DataTypes.NUMBER,
      },
    });

    await sequelize.sync();
  });
  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 100);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "1" } });

    expect(productModel?.toJSON()).toStrictEqual({
      id: "1",
      name: "Product 1",
      price: 100,
    });
  });
});
