import { createSelector } from 'reselect';

/**
 * Direct selector to the profileSlider state domain
 */
const selectProfileSliderDomain = (state) => state.get('profileSlider');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfileSlider
 */

const makeSelectProfileSlider = () => createSelector(
  selectProfileSliderDomain,
  (substate) => substate.toJS()
);

export default makeSelectProfileSlider;
export {
  selectProfileSliderDomain,
};
