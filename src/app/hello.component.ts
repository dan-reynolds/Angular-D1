import { Component, Input } from '@angular/core';

@Component({
 templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class HelloComponent  {
  @Input() name: string
  @Input() title: string
}
