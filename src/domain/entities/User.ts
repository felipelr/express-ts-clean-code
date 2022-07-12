import crypto from "crypto";

export class User {
  private readonly _id: string;
  private _name: string;
  private _email: string;
  private _password: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this._id = crypto.randomUUID();
    }
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  private set name(value: string) {
    this._name = value;
  }

  public get email() {
    return this._email;
  }

  private set email(value: string) {
    this._email = value;
  }

  public get password() {
    return this._password;
  }

  private set password(value: string) {
    this._password = value;
  }
}
