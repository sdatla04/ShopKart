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
var customer_service_1 = require("./customer.service");
var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(_customerService) {
        this._customerService = _customerService;
        this.statusMessage = 'Loading Data ...Please Wait ! ! !';
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        //Get from Sample
        //this.customers = this._customerService.getSampleCustomers();
        var _this = this;
        // Call webserviceAPI using the customer.service
        this._customerService.getCustomers()
            .subscribe(function (custData) { return _this.customers = custData; }, function (error) {
            _this.statusMessage = 'Error in the service. Retry Again';
            console.error(error);
        });
    };
    CustomerListComponent.prototype.getSampleCustomers = function () {
        this.customers = [
            { "Id": 1, "Name": "Sashi", "Email": "sddd", "IsSubscribedToNewsletter": true, "Birthdate": "1979-10-10T00:00:00" },
            { "Id": 2, "Name": "Meha", "Email": "sas", "IsSubscribedToNewsletter": false, "Birthdate": "2006-03-04T00:00:00" }
        ];
    };
    CustomerListComponent.prototype.trackBycustomerId = function (index, customer) {
        return customer.Id;
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            selector: 'list-customer',
            templateUrl: 'app/customer/customerList.component.html',
            styleUrls: ['app/customer/customerList.component.css'],
        }),
        __metadata("design:paramtypes", [customer_service_1.CustomerService])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customerList.component.js.map