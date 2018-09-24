"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var customer_component_1 = require("./customer/customer.component");
var customerList_component_1 = require("./customer/customerList.component");
var home_component_1 = require("./home/home.component");
var pageNotFound_1 = require("./others/pageNotFound");
var customer_service_1 = require("./customer/customer.service");
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'customers', component: customerList_component_1.CustomerListComponent },
    { path: 'customers/:Id', component: customer_component_1.CustomerComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
            declarations: [app_component_1.AppComponent, customer_component_1.CustomerComponent, customerList_component_1.CustomerListComponent,
                home_component_1.HomeComponent, pageNotFound_1.PageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [customer_service_1.CustomerService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map