import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  (restaurantsList) => Object.values(restaurantsList)
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { reviews }) => reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
);

export const reviewSelector = createSelector(
  reviewsSelector,
  usersSelector,
  (_, props) => props.id,
  (reviews, users, id) => {
    const review = reviews[id];
    const reviewWithUser = { ...review, user: users[review.userId] };
    return reviewWithUser;
  }
);

export const amountSelector = createSelector(
  orderSelector,
  (_, props) => props.id,
  (order, id) => order[id] || 0
);

export const productSelector = createSelector(
  productsSelector,
  (_, props) => props.id,
  (products, id) => products[id]
);
