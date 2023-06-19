import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarComponent } from './car/car.component';
import { PartsComponent } from './parts/parts.component';
import { StaffComponent } from './staff/staff.component';
import { BillingComponent } from './billing/billing.component';
import { HomeComponent } from './home/home.component';
import { TagInputModule } from 'ngx-chips';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarComponent,
    PartsComponent,
    StaffComponent,
    BillingComponent,
    HomeComponent
  ],
  imports: [
    TagInputModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
