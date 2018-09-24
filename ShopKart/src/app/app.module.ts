import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customerList.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/pageNotFound';
import { CustomerService } from './customer/customer.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'customers/:Id', component: CustomerComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, CustomerComponent, CustomerListComponent,
        HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers: [CustomerService]
})

export class AppModule { }
