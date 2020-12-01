import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const restaurantWithReview = { ...restaurants[payload.restaurantId] };
      restaurantWithReview.reviews = [
        ...restaurantWithReview.reviews,
        payload.id,
      ];
      return {
        ...restaurants,
        [payload.restaurantId]: restaurantWithReview,
      };

    default:
      return restaurants;
  }
};
