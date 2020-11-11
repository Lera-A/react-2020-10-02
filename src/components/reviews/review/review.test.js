import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from './review';
import { restaurants } from '..//..//..//fixtures';

const review = restaurants[0].reviews[1];

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('Should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('Should render user', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe(review.user);
  });
  it('Should render text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe(review.text);
  });
  it('Should render rating', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="full-star"]').length).toBe(review.rating);
  });
});

//describe('Anonymous Review', () => {
//  it('Should render anonymous name', () => {
//    const wrapper = mount(<Review text={review.text} rating={review.rating} />);
//expect(wrapper.find('[data-id="review-user"]').text()).toBe('Anonymous')
//});
//});

describe('Anonymous Review', () => {
  let component, name;

  beforeEach(() => {
    component = mount(<Review text={review.text} rating={review.rating} />);
    name = component.find('[data-id="review-user"]').text();
  });

  it('Should render anonymous name', () => {
    expect(name).toBe('Anonymous');
  });
});
