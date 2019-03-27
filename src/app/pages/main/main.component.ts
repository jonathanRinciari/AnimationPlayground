import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group, sequence } from '@angular/animations';
import { AnimationService } from '../../services/animation.service';
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
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [MenuButtonAnimation, MenuButtonAnimationAlt, MenuBar, MenuBarAlt, MenuBarAltTwo, MenuBarAltThree, Title, TitleAlt]
})
export class MainComponent implements OnInit {
  state = false;
  counter = 0;
  times = 5;

  constructor(
    private animationTrigger: AnimationService
  ) { }

  get stateName() {
    return this.state ? 'show' : 'hide';
  }

  ngOnInit() {
  }

  toggle() {
    console.log('TEST');
      setInterval(() => {
        console.log('TESTasf');
          this.state = !this.state;
      }, 2000);
  }

  startAnimation() {
    this.state = !this.state;
    // this.animationTrigger.buttonTriggered$.next({triggered: true});
  }


  onDone($event) {
    // call this function at the end of the previous animation.
    // run it as many time as defined
    // if (this.counter < this.times) {
    //   this.toggle();
    //   this.counter++;
    // }
  }



}




