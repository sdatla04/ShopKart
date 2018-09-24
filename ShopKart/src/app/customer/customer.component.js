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
var router_1 = require("@angular/router");
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(_customerService, _activatedRoute) {
        this._customerService = _customerService;
        this._activatedRoute = _activatedRoute;
        this.statusMessage = 'Loading Data...Please wait!!';
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var custId = this._activatedRoute.snapshot.params['Id'];
        this._customerService.getCustomerById(custId)
            .subscribe(function (custData) {
            // Check if the response has the customer data and then display
            if (custData == null) {
                _this.statusMessage = 'The customer with the ID {' + custId + '} does not exist !!';
            }
            else {
                _this.customer = custData;
            }
        }, function (error) {
            _this.statusMessage = 'Problem occured with the service. Please try again!!';
            console.error(error);
        });
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: 'customer',
            //templateUrl: 'app\customer\customer.component.html', // FORWARD SLASH-- 
            templateUrl: 'app/customer/customer.component.html',
            styleUrls: ['app/customer/customer.component.css']
        }),
        __metadata("design:paramtypes", [customer_service_1.CustomerService,
            router_1.ActivatedRoute])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map