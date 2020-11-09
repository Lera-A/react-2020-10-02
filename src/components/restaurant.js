import React, { useMemo } from 'react';
import Reviews from './reviews';
import Menu from './menu';
import Rate from './rate';

export default function Restaurant(props) {
  const averageRate = useMemo(() => {
    const total = props.restaurant.reviews.reduce(
      (acc, { rating }) => acc + rating,
      0
    );
    return Math.round(total / props.restaurant.reviews.length);
  }, [props.restaurant.reviews]);

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
      <Rate rate={averageRate} isAverage={true} />
    </div>
  );
}
