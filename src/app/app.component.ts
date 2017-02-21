import {Component} from '@angular/core';

@Component({
    selector: '[kyf-root]',
    template: `
    <div style="max-width: 350px">
        <div kyf-header></div>
        <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {

}


