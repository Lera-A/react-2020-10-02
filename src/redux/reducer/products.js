import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants';

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      if (state.indexOf(payload.product) !== -1) {
        return state;
      }
      return [...state, payload.product];
    case REMOVE_PRODUCT:
      const index = state.indexOf(payload.product);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};
