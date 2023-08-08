import { createAction, props } from '@ngrx/store';


export const increment=createAction('Increment',props<{ value: number }>())
export const decrement=createAction('decrement')
export const reset=createAction('reset')

