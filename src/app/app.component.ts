import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('float', [
      transition('* <=> *', [
        style({transform: 'translateX(-740px)'}), animate('800ms ease'),
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'AnimationPlayground';
}
