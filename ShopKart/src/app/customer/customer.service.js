"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var CustomerService = /** @class */ (function () {
    function CustomerService(_http) {
        this._http = _http;
    }
    // Call the web service API to get list of customer
    CustomerService.prototype.getCustomers = function () {
        return this._http.get("http://localhost:57754/api/customers")
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    //API URL: http://localhost:57754/api/customers/1
    // Call the web service API to get customer by code
    CustomerService.prototype.getCustomerById = function (Id) {
        return this._http.get("http://localhost:57754/api/customers/" + Id)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CustomerService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    // Populates the hard coded vaues for IEmployee
    CustomerService.prototype.getSampleCustomers = function () {
        return [
            { "Id": 1, "Name": "Sashi", "Email": "sddd", "IsSubscribedToNewsletter": true, "Birthdate": "1979-10-10T00:00:00" },
            { "Id": 2, "Name": "Meha", "Email": "sas", "IsSubscribedToNewsletter": false, "Birthdate": "2006-03-04T00:00:00" }
        ];
    };
    CustomerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map