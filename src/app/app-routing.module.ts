import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';
import { PartsComponent } from './parts/parts.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'car',
    component:CarComponent
  },
  {
    path:'parts',
    component:PartsComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'billing',
    component:BillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
