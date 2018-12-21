import { Contact } from './contact.model';

export class Client {
  id: number;
  company: string;
  description: string;
  address: string;

  contact: Contact = null;
}
