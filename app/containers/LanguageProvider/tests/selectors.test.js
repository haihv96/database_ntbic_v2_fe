import { fromJS } from 'immutable';

import {
  selectLanguage,
} from '../selectors';

describe('selectLanguage', () => {
  it('should select the globals state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      language: globalState,
    });
    expect(selectLanguage(mockedState)).toEqual(globalState);
  });
});
