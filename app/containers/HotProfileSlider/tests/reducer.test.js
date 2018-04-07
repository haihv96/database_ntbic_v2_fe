
import { fromJS } from 'immutable';
import profileSliderReducer from '../reducer';

describe('profileSliderReducer', () => {
  it('returns the initial state', () => {
    expect(profileSliderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
