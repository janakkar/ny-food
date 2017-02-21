import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CalculatorComponent} from './calculator/calculator.component';
import {LoginComponent} from './login/login.component';
import {CanActivateIfAuthenticatedGuard} from "./login/authentication.guard";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login',component: LoginComponent},
    { path: 'home', component: CalculatorComponent, canActivate: [CanActivateIfAuthenticatedGuard]},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
