import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group, sequence } from '@angular/animations';
import { AnimationService } from '../../services/animation.service';
const MenuButtonAnimation = trigger('menuState', [
  state('hide', style({ transform: 'rotate(0)' })),
  state('show', style({ transform: 'rotate(-180deg)' })),
  transition('hide => show', [style({transform: 'rotate(-360deg)'}), animate('350ms ease-out')]),
  transition('show => hide', animate('350ms ease-in '))
]);

const spinner = trigger('spinner', [
  transition('* <=> *', [style({transform: 'rotate(-360deg)'}), animate('800ms ease-out')]),
]);

const spinnerRight = trigger('spin', [
  transition('* <=> *', [style({transform: 'rotate(360deg)'}), animate('800ms ease-out')]),
]);

const Keyframe = trigger('menuState', [
  transition('* => move',
  animate('2000ms', keyframes([
    style({transform: 'translateX(0)    rotateY(0)',        offset: 0}),
    style({transform: 'translateX(50%)  rotateY(90deg)',    offset: 0.33}),
    style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
    style({transform: 'translateX(-100%)',                  offset: 1.0})
  ]))
)]);


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

const ButtonState = trigger('button', [
  state('show', style({
    transform: 'translateX(-100px) rotate(90deg)',
  })),
  state('hide', style({
    transform: 'translateX(0px)',
  })),
  transition('show => hide', [
    style({ transform: 'translateX(-100px)', opacity: 1 }),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0px)'
        })),
        animate('0.3s ease', style({
          opacity: .5
        }))
      ])
  ]),
  transition('hide => *', [
    style({ transform: 'translateX(0px) rotate(0deg)', opacity: 1 }),
      sequence([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(-100px)'
        })),
        animate('0.3s 0.5s ease', style({
          transform: 'rotate(90deg)'
        })),
        animate('0.3s ease', style({
          opacity: .5
        }))
      ])
  ]),
  // transition('hide <=> *', [
  //   style({ transform: 'translateX(-100px)', opacity: 1 }),
  //     group([
  //       animate('0.3s 0.1s ease', style({
  //         transform: 'translateX(0px)'
  //       })),
  //       animate('0.3s ease', style({
  //         opacity: 1
  //       }))
  //     ])
  // ])
]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [ButtonState]
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
    this.animationTrigger.buttonTriggered$.next({triggered: true});
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




