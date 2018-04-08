
import { fromJS } from 'immutable';
import searchAllReducer from '../reducer';

describe('searchAllReducer', () => {
  it('returns the initial state', () => {
    expect(searchAllReducer(undefined, {})).toEqual(fromJS({}));
  });
});
