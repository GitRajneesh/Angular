import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  { path: "", component: HomeComponent,canActivate:[AuthGuard] },
  {
    path: "customer", component: CustomerComponent,
    canActivate:[RoleGuard]
  },
  {path:"login",component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
