import {
  INCREMENT,
  DECREMENT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_TO_ZERO,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const add_product = (product) => ({
  type: ADD_PRODUCT,
  payload: { product },
});
export const remove_product = (product) => ({
  type: REMOVE_PRODUCT,
  payload: { product },
});
export const set_to_zero = (id) => ({ type: SET_TO_ZERO, payload: { id } });
