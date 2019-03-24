import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
const MenuButtonAnimation = trigger('menuState', [
  state('hide', style({ transform: 'rotate(0)' })),
  state('show', style({ transform: 'rotate(-180deg)' })),
  transition('hide => show', [style({transform: 'rotate(-360deg)'}), animate('350ms ease-out')]),
  transition('show => hide', animate('350ms ease-in'))
]);

// const Keyframe = trigger('menuState', [
//   transition('* => move',
//   animate('2000ms', keyframes([
//     style({transform: 'translateX(0)    rotateY(0)',        offset: 0}),
//     style({transform: 'translateX(50%)  rotateY(90deg)',    offset: 0.33}),
//     style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
//     style({transform: 'translateX(-100%)',                  offset: 1.0})
//   ]))
// )]);


const MultiState = trigger('menuState', [
  state('move', style({
    transform: 'translateX(-100%)',
  })),
  state('enlarge',   style({
    transform: 'scale(1.5)',
  })),
  state('spin',   style({
    transform: 'rotateY(180deg) rotateZ(90deg)',
  })),
  transition('* => *', animate('500ms ease')),
]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [MultiState]
})
export class MainComponent implements OnInit {
  state = false;

  constructor() { }

  get stateName() {
    return this.state ? 'move' : 'spin';
  }

  ngOnInit() {
  }

  toggle() {
    console.log(this.state);
    this.state = !this.state;
  }



}




