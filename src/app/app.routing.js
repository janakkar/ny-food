"use strict";
var router_1 = require("@angular/router");
var calculator_component_1 = require('./calculator/calculator.component');
var login_component_1 = require('./login/login.component');
var authentication_guard_1 = require("./login/authentication.guard");
var APP_ROUTES = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: calculator_component_1.CalculatorComponent, canActivate: [authentication_guard_1.CanActivateIfAuthenticatedGuard] },
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
