import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../login/authentication.service";

@Component({
    selector: 'kyf-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    constructor(private authService: AuthenticationService) {
    }

    ngOnInit() {
    }

    doLogout() {
        this.authService.doLogout();
    }

    showNavBar() {
        return this.authService.getLoggedIn();
    }
}
