import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '..//constants';

export default (store) => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    action.payload.id = uuidv4();
    action.payload.userId = uuidv4();
  }
  next(action);
};
