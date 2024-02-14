import Customer from "../entity/customer";
import ValidatorInterface from "./validator.interface";
import * as yup from "yup";

export default class CustomerYupValidator
  implements ValidatorInterface<Customer>
{
  validate(entity: Customer): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          name: yup.string().required("Name is required"),
        })
        .validateSync({
          id: entity.id,
          name: entity.name,
        });
    } catch (error) {}
  }
}
