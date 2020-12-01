import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';
import { reviewSelector } from '../../../redux/selectors';

const Review = ({ reviews }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {reviews.user.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {reviews.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={reviews.rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  id: PropTypes.string,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => ({
  reviews: reviewSelector(state, props),
}))(Review);
