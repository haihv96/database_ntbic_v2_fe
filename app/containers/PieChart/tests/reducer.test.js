
import { fromJS } from 'immutable';
import pieChartReducer from '../reducer';

describe('pieChartReducer', () => {
  it('returns the initial state', () => {
    expect(pieChartReducer(undefined, {})).toEqual(fromJS({}));
  });
});
