import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFire} from "angularfire2";
import User = firebase.User;
import {Observable} from "rxjs";

@Injectable()
export class AuthenticationService {

  private isLoggedIn;

  constructor(private router: Router, public af: AngularFire) {
    this.isLoggedIn = false;

    this.af.auth.subscribe((auth) => {
      if (auth == null) {
        console.log("User not logged in");
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      } else {
        console.log("User logged in");
        this.isLoggedIn = true;
      }
    });
  }

  checkLogin() {
    return Observable.from(this.af.auth)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if (!authenticated) {
          console.log('Not logged in');
          this.router.navigate([ '/login' ]);
        }
      });
  }

  doLogin(value: User) {
    this.af.auth.login(value).then(() => {
      this.router.navigate(['/home']);
    }).catch(() => {
      console.log("Login error");
    });
  }

  doLogout() {
    console.log("Log out");
    this.af.auth.logout();
  }

  getLoggedIn() {
    return this.isLoggedIn;
  }
}
