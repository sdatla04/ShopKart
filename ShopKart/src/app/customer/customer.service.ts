import { Injectable } from '@angular/core';
import { ICustomer } from './customer';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable() 
export class CustomerService {

    constructor(private _http: Http) {

    }

     // Call the web service API to get list of customer
    getCustomers(): Observable<ICustomer[]>
    {
        return this._http.get("http://localhost:57754/api/customers")
            .map((resp: Response) => <ICustomer[]>resp.json())
            .catch (this.handleError);
    }

    //API URL: http://localhost:57754/api/customers/1
    // Call the web service API to get customer by code
    getCustomerById(Id: string): Observable<ICustomer> {
        return this._http.get("http://localhost:57754/api/customers/" +Id)
            .map((resp: Response) => <ICustomer>resp.json())
            .catch(this.handleError);         
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }
    // Populates the hard coded vaues for IEmployee
    getSampleCustomers(): ICustomer[] {
        return [
            { "Id": 1, "Name": "Sashi", "Email": "sddd", "IsSubscribedToNewsletter": true, "Birthdate": "1979-10-10T00:00:00" },
            { "Id": 2, "Name": "Meha", "Email": "sas", "IsSubscribedToNewsletter": false, "Birthdate": "2006-03-04T00:00:00" }
        ];
    }
    

} 