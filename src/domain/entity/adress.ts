export default class Adress {
  _street: string;
  _number: number = 0;
  _zip: string;
  _city: string;

  constructor(_street: string, _number: number, _zip: string, _city: string) {
    this._street = _street;
    this._number = _number;
    this._zip = _zip;
    this._city = _city;

    this.validate();
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }
  get zip(): string {
    return this._zip;
  }
  get city(): string {
    return this._city;
  }
  validate() {
    if (this._street.length === 0) {
      throw new Error("Please select a street");
    }
    if (this._number === 0) {
      throw new Error("Please select a number");
    }
    if (this._zip.length === 0) {
      throw new Error("Please select a zip");
    }
    if (this._city.length === 0) {
      throw new Error("Please select a city");
    }
  }
  toString() {
    return `${this._street} ${this._number} ${this._zip} ${this._city}`;
  }
}
