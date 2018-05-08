
import { fromJS } from 'immutable';
import modalDetailReducer from '../reducer';

describe('modalDetailReducer', () => {
  it('returns the initial state', () => {
    expect(modalDetailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
