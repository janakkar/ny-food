import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable, Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";

@Injectable()
export class CanActivateIfAuthenticatedGuard implements CanActivate {


    constructor(private af: AngularFire, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        const authState = new Subject<boolean>();
        this.af.auth.subscribe((auth) => {
          console.log(auth);
          if (auth == null) {
                this.router.navigate(['/login']);
                authState.next(false);
            } else {
                authState.next(true);
            }

        });
        return authState.first();
    }
}