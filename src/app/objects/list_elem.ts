export class ListElem {
  _id: string;
  public listname: { type:string, required: true, unique: true };
  public list: [{value:string}];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
