import {Component} from '@angular/core';

@Component({
    selector: '[kyf-root]',
    template: `
    <div class="kyf-root">
        <h1 class="kyf-header">
          Know-Your-Food
        </h1>
        <router-outlet></router-outlet>
    </div>`,
    styleUrls: ['./app.component.css']

})
export class AppComponent {

}


