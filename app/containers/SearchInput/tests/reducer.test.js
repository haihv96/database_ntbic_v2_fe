
import { fromJS } from 'immutable';
import searchInputReducer from '../reducer';

describe('searchInputReducer', () => {
  it('returns the initial state', () => {
    expect(searchInputReducer(undefined, {})).toEqual(fromJS({}));
  });
});
