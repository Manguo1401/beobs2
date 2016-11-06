export class Organism {
  _id: string;
  public name: string;
  public accr: string;
  public desc: string;
  public status: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
