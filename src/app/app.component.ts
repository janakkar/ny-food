import {Component} from '@angular/core';

@Component({
    selector: '[kyf-root]',
    template: `
    <div class="kyf-root">
        <h1 class="kyf-header">
          Know-Your-Food
        </h1>
        <kyf-navigation></kyf-navigation>
        <div class="kyf-content">
            <router-outlet></router-outlet>
        </div>
    </div>`,
    styleUrls: ['./app.component.css']

})
export class AppComponent {

}


