import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../app/card.action';

export const initialState: string[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { item }) => [...state, item]),
  on(removeFromCart, (state, { item }) => state.filter(cartItem => cartItem !== item))
);