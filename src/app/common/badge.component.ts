import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: '[kyf-badge]',
  template: `
    <div class="circle grade-{{label}}" [ngClass]="{'active-grade': isActive}">
                    <span class="grade">{{label}}</span>
                </div>
  `,
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent  {

  @Input()
  private label: string;

  @Input()
  private isActive: boolean;
}
