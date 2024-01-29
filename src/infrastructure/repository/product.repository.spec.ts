import { Sequelize } from "sequelize";
import ProductModel from "../db/sequelize/model/product.model";

describe("Product repository tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequelize.define<ProductModel>("Product", {
      ProductModel: "Product",
    });
    await sequelize.sync();
  });
  afterEach(async () => {
    await sequelize.close();
  });
});
