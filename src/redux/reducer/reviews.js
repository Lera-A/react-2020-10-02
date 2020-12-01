import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [payload.id]: {
          id: payload.id,
          userId: payload.userId,
          text: payload.text,
          rating: payload.rating,
        },
      };

    default:
      return reviews;
  }
};
