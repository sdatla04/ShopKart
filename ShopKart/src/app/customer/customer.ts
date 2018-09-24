export interface ICustomer {
    Id: number;
    Name: string;
    Email: string;
    IsSubscribedToNewsletter: boolean;
    Birthdate: string;
  
}

export class Customer implements ICustomer {
    constructor(public Id: number, public Name: string, public Email: string,
        public IsSubscribedToNewsletter: boolean, public Birthdate: string, ) {

    }
}


