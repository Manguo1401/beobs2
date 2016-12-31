export class User {
_id: string;
  public username: string;
  public password: string;
  public email: string;
  public status: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
