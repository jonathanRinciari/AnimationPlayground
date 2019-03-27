import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


const leftWallSlim = trigger('leftWallSlim', [
  state('hide', style({ transform: 'rotate(39deg)', left: '50%', top: '30%'})),
  state('show', style({ transform: 'rotate(0deg)', top: '0%', left: '0%' })),
  transition('hide => show', [style({transform: 'rotate(39deg)', left: '50%', top: '30%'}), animate('450ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg)', top: '0%', left: '0%'}), animate('450ms ease-out')])
]);

const leftWallAlt = trigger('leftWallAlt', [
  state('hide', style({ transform: 'rotate(-69deg)', left: '50%', top: '20%'})),
  state('show', style({ transform: 'rotate(0deg)', top: '0%', left: '1%' })),
  transition('hide => show', [style({transform: 'rotate(-69deg)', left: '50%', top: '20%'}), animate('450ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg)', top: '0%', left: '1%'}), animate('450ms ease-out')])
]);

const leftWallBottom = trigger('leftWallBottom', [
  state('hide', style({ transform: 'rotate(19deg)', left: '40%', top: '40%'})),
  state('show', style({ transform: 'rotate(0deg)', top: '60%', left: '0%' })),
  transition('hide => show', [style({transform: 'rotate(19deg)', left: '40%', top: '40%'}), animate('450ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(0deg)', top: '60%', left: '0%'}), animate('450ms ease-out')])
]);

const rightWall = trigger('rightWall', [
  state('hide', style({ transform: 'rotate(0deg)', right: '50%', top: '60%', height: '0%'})),
  state('show', style({ transform: 'rotate(360deg)', top: '0%', right: '0%', height: '100%' })),
  transition('hide => show', [style({transform: 'rotate(0deg)', right: '50%', top: '60%', height: '0%'}), animate('450ms ease-out')]),
  transition('show => hide', [style({transform: 'rotate(360deg)', top: '0%', right: '0%', height: '100%'}), animate('450ms ease-out')])
]);

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [leftWallSlim, leftWallAlt, leftWallBottom, rightWall]
})
export class CollapseComponent implements OnInit {
  state = false;
  constructor() { }

  ngOnInit() {
  }

  get stateName() {
    return this.state ? 'show' : 'hide';
  }

  toggle() {
    this.state = !this.state;
  }

}
