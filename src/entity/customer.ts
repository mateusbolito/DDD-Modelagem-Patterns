// essa classe é Entidade de "Negocio", contexto diferante de Models
// padrao para performance da aplicaçao

import Adress from "./adress";

export default class Customer {
  _id: string;
  _name: string;
  _address!: Adress;
  _active: boolean = true;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;

    this.validate();
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("name is required");
    }
    if (this._address === undefined) {
      throw new Error("address is require");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("address is required");
    }
    this._active = true;
  }
  deactivate() {
    this._active = false;
  }
  set Adres(address: Adress) {
    this._address = address;
  }
}

let customer = new Customer("2334", "22");
