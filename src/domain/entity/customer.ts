// essa classe é Entidade de "Negocio", contexto diferante de Models
// padrao para performance da aplicaçao

import Adress from "./adress";

export default class Customer {
  [x: string]: any;
  private _id: string;
  private _name: string;
  private _address!: Adress;
  private _active: boolean = true;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get name(): string {
    return this._name;
  }
  get rewardPoints(): number {
    return this._rewardPoints;
  }

  get id(): string {
    return this._id;
  }
  validate() {
    if (this._id.length === 0) {
      throw new Error("address is require");
    }
    if (this._name.length === 0) {
      throw new Error("name is required");
    }
  }
  isActive(): boolean {
    return this._active;
  }
  changeName(name: string) {
    this._name = name;
    this.validate();
  }
  changeAddress(address: Adress) {
    this.Address = address;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("address is mandatory to activate costumer");
    }
    this._active = true;
  }
  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }
  set Address(address: Adress) {
    this._address = address;
  }
}
