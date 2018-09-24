import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
    selector: 'list-customer',
    templateUrl: 'app/customer/customerList.component.html',
    styleUrls: ['app/customer/customerList.component.css'],
    //providers: [customerService]
})
export class CustomerListComponent implements OnInit   {
    customers: ICustomer[];

    statusMessage: string = 'Loading Data ...Please Wait ! ! !';
    constructor(private _customerService: CustomerService) {}

    ngOnInit() {
        //Get from Sample
        //this.customers = this._customerService.getSampleCustomers();

        // Call webserviceAPI using the customer.service
        this._customerService.getCustomers()
            .subscribe(
                 (custData) => this.customers = custData,
                        (error) => {
                            this.statusMessage = 'Error in the service. Retry Again';
                            console.error(error);
                        }
                    );
    }

    getSampleCustomers(): void {
        this.customers= [
            { "Id": 1, "Name": "Sashi", "Email": "sddd", "IsSubscribedToNewsletter": true, "Birthdate": "1979-10-10T00:00:00" },
            { "Id": 2, "Name": "Meha", "Email": "sas", "IsSubscribedToNewsletter": false, "Birthdate": "2006-03-04T00:00:00" }
        ];
    }
    
   
    trackBycustomerId(index: number, customer: ICustomer): number
    {
        return customer.Id;
    }

}