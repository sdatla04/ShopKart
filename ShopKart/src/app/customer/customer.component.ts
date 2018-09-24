import { Component,OnInit } from '@angular/core';
import { ICustomer } from './customer';
import { CustomerService } from './customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'customer',
    //templateUrl: 'app\customer\customer.component.html', // FORWARD SLASH-- 
    templateUrl: 'app/customer/customer.component.html',
    styleUrls: ['app/customer/customer.component.css']

})
export class CustomerComponent implements OnInit {
    customer: ICustomer;
    statusMessage: string = 'Loading Data...Please wait!!';

    constructor(private _customerService: CustomerService,
        private _activatedRoute: ActivatedRoute){ }

                ngOnInit() {
                    let custId: string = this._activatedRoute.snapshot.params['Id'];

                    this._customerService.getCustomerById(custId)
                    .subscribe(
                    (custData) => { 
                        // Check if the response has the customer data and then display
                        if (custData == null) {
                            this.statusMessage = 'The customer with the ID {' + custId + '} does not exist !!';
                        }
                        else {
                            this.customer = custData;
                        }
                    },
                        (error) => {
                            this.statusMessage = 'Problem occured with the service. Please try again!!';
                            console.error(error);
                        }
                    );
    }
}

