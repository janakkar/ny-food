"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var CanActivateIfAuthenticatedGuard = (function () {
    function CanActivateIfAuthenticatedGuard(af, router) {
        this.af = af;
        this.router = router;
    }
    CanActivateIfAuthenticatedGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var authState = new rxjs_1.Subject();
        this.af.auth.subscribe(function (auth) {
            console.log(auth);
            if (auth == null) {
                _this.router.navigate(['/login']);
                authState.next(false);
            }
            else {
                authState.next(true);
            }
        });
        return authState.first();
    };
    CanActivateIfAuthenticatedGuard = __decorate([
        core_1.Injectable()
    ], CanActivateIfAuthenticatedGuard);
    return CanActivateIfAuthenticatedGuard;
}());
exports.CanActivateIfAuthenticatedGuard = CanActivateIfAuthenticatedGuard;
