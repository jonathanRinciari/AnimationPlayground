import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  public buttonTriggered$ = new BehaviorSubject({triggered: false});
  constructor() {

  }
}
