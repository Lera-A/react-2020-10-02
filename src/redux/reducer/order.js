import { DECREMENT, INCREMENT, SET_TO_ZERO } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      if (state[payload.id] > 0) {
        return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
      }
      return state;
    case SET_TO_ZERO:
      return { ...state, [payload.id]: 0 };
    default:
      return state;
  }
};
