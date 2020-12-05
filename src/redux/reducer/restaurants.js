import {
  ADD_REVIEW,
  FAILURE,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
} from '../constants';
import produce from 'immer';

import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, response, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOAD_RESTAURANTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
      };

    case LOAD_RESTAURANTS + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };

    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].reviews.push(reviewId);
      });

    //  case ADD_REVIEW:
    //  const restaurant = state[payload.restaurantId];
    //  return {
    //    ...state,
    //    [payload.restaurantId]: {
    //      ...restaurant,
    //      reviews: [...restaurant.reviews, reviewId],
    //    },
    //  };

    default:
      return state;
  }
};
