import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import {
  decrement,
  increment,
  remove_product,
  set_to_zero,
} from '../../redux/actions';

const Order = ({
  products,
  amount,
  decrement,
  increment,
  remove_product,
  set_to_zero,
}) => {
  const averagePrice = useMemo(() => {
    const total = products.reduce(
      (acc, { price, id }) => acc + price * amount[id],
      0
    );
    return total;
  }, [products, amount]);

  return (
    <div>
      <h1> Order </h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            Product: {product.name}, price: {product.price}$, amount:{' '}
            {amount[product.id]}, total price:{' '}
            {amount[product.id] * product.price}${' '}
            <button
              onClick={() => {
                remove_product(product);
                set_to_zero(product.id);
              }}
            >
              x
            </button>
          </p>
          <button
            onClick={() => {
              amount[product.id] === 1
                ? remove_product(product) && decrement(product.id)
                : decrement(product.id);
            }}
          >
            -
          </button>
          <button onClick={() => increment(product.id)}>+</button>
        </div>
      ))}
      {averagePrice > 0 && <p>Total: {averagePrice}$</p>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  amount: state.order,
});

const mapDispatchToProps = {
  decrement,
  increment,
  remove_product,
  set_to_zero,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
