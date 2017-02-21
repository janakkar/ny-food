import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AngularFire} from "angularfire2";
import User = firebase.User;
import {Router} from "@angular/router";

@Component({
    selector: 'kyf-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private af: AngularFire, private router: Router) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit({value, valid} : {value: User, valid: boolean}) {
        console.log(value);
        this.af.auth.login(value).then(() => {
            this.router.navigate(['/home']);
        }).catch(() => {
            console.log("Login error");
        });
    }

}
