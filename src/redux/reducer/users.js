import { ADD_REVIEW } from '../constants';
import { normalizedUsers } from '../../fixtures';
import produce from 'immer';
import { arrToMap } from '../utils';

export default produce((draft = arrToMap(normalizedUsers), action) => {
  const { type, payload, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = payload.review;
      draft[userId] = { id: userId, name };
      break;

    default:
      return draft;
  }
});
