import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { AnimationService } from './services/animation.service';

const width = `${window.innerWidth - 210}px`;

const MenuButtonAnimation = trigger('menuState', [
  state('hide', style({ transform: 'rotate(0deg) translateX(0px) translateY(0px)'})),
  state('show', style({ transform: 'rotate(0deg) translateX(-1470px) translateY(0px)' })),
  transition('hide => show', [style({transform: 'rotate(0deg) translateX(0px) translateY(0px)'}), animate('450ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg) translateX(-1470px) translateY(0px)'}), animate('450ms ease-out')])
]);

const MenuButtonAnimationAlt = trigger('menuStateAlt', [
  state('hide', style({ transform: 'rotate(0deg) translateX(0px) translateY(0px)'})),
  state('show', style({ transform: 'rotate(0deg) translateX(1470px) translateY(0px)' })),
  transition('hide => show', [style({transform: 'rotate(0deg) translateX(0px) translateY(0px)'}), animate('450ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg) translateX(1470px) translateY(0px)'}), animate('450ms ease-out')])
]);

const MenuBar = trigger('menuBar', [
  state('hide', style({ transform: 'rotate(0deg) translateX(0px) translateY(0px)'})),
  state('show', style({ transform: 'rotate(0deg) translateX(1470px) translateY(782px)' })),
  transition('hide => show', [style({transform: 'rotate(0deg) translateX(0px) translateY(0px)'}), animate('850ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg) translateX(1470px) translateY(782px)'}), animate('850ms ease-out')])
]);

const MenuBarAlt = trigger('menuBarAlt', [
  state('hide', style({ transform: 'rotate(0deg) translateX(0px) translateY(0px)'})),
  state('show', style({ transform: 'rotate(0deg) translateX(-1470px) translateY(-782px)' })),
  transition('hide => show', [style({transform: 'rotate(0deg) translateX(0px) translateY(0px)'}), animate('850ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg) translateX(-1470px) translateY(-782px)'}), animate('850ms ease-out')])
]);

const MenuBarAltTwo = trigger('menuBarAltTwo', [
  state('hide', style({ transform: 'rotate(0deg) translateX(0px) translateY(0px)'})),
  state('show', style({ transform: 'rotate(0deg) translateX(1470px) translateY(-782px)' })),
  transition('hide => show', [style({transform: 'rotate(0deg) translateX(0px) translateY(0px)'}), animate('850ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg) translateX(1470px) translateY(-782px)'}), animate('850ms ease-out')])
]);

const MenuBarAltThree = trigger('menuBarAltThree', [
  state('hide', style({ transform: 'rotate(0deg) translateX(0px) translateY(0px)'})),
  state('show', style({ transform: 'rotate(0deg) translateX(-1470px) translateY(782px)' })),
  transition('hide => show', [style({transform: 'rotate(0deg) translateX(0px) translateY(0px)'}), animate('850ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg) translateX(-1470px) translateY(782px)'}), animate('850ms ease-out')])
]);

const Title = trigger('title', [
  state('hide', style({ transform: 'rotate(0deg) translateX(0px) translateY(0px)'})),
  state('show', style({ transform: 'rotate(-720deg) translateX(0px) translateY(-782px)' })),
  transition('hide => show', [style({transform: 'rotate(0deg) translateX(0px) translateY(0px)'}), animate('850ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(-720deg) translateX(0px) translateY(-782px)'}), animate('850ms ease-out')])
]);

const TitleAlt = trigger('titleAlt', [
  state('hide', style({ transform: 'rotate(0deg) translateX(0px) translateY(0px)'})),
  state('show', style({ transform: 'rotate(720deg) translateX(0px) translateY(782px)' })),
  transition('hide => show', [style({transform: 'rotate(0deg) translateX(0px) translateY(0px)'}), animate('850ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(720deg) translateX(0px) translateY(782px)'}), animate('850ms ease-out')])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  title = 'AnimationPlayground';
  constructor(
    private animationTrigger: AnimationService
  ) {
    console.log(window.innerWidth)
    console.log(window.outerWidth)
    this.animationTrigger.buttonTriggered$.subscribe((data) => {
      if (data.triggered) {
        this.state = !this.state;
      }
    });
  }
  state = false;
  get stateName() {
    return this.state ? 'show' : 'hide';
  }

  toggle() {
    this.state = !this.state;
  }
}
