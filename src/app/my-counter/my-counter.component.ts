import { Component } from '@angular/core';
import { Store ,select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment,decrement,reset } from '../counters.action';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {
  constructor(private store:Store<{count:number}>){

    this.count$ = store.pipe(select('count'));
  }
  count$: Observable<number>;
  increment(){
    this.store.dispatch(increment({ value: 10 }))
  }
  decremen(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())

  }
}
