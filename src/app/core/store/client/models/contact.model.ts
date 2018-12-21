export interface ContactApiModel {
  name: string;
  phone: number;
  email: string;
}

export class Contact {
  name: string;
  phone: number;
  email: string;

  constructor(raw: ContactApiModel) {
    this.name = raw.name;
    this.phone = raw.phone;
    this.email = raw.email;
  }
}
