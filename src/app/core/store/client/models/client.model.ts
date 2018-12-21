import { Contact } from './contact.model';

export interface ClientApiModel {
  id: number;
  company: string;
  description: string;
  address: string;

  contact: {
    name: string;
    phone: number;
    email: string;
  };
}

export class Client {
  id: number;
  company: string;
  description: string;
  address: string;

  contact: Contact = null;

  constructor(raw: ClientApiModel) {
    this.id = raw.id;
    this.company = raw.company;
    this.description = raw.description;
    this.address = raw.address;

    this.contact = new Contact(raw.contact);
  }
}
