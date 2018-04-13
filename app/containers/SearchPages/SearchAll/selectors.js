import { createSelector } from 'reselect';

/**
 * Direct selector to the searchAll state domain
 */
const selectSearchAllDomain = (state) => state.get('searchAll');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchAll
 */

const makeSelectSearchAll = () => createSelector(
  selectSearchAllDomain,
  (substate) => substate
);

export default makeSelectSearchAll;
export {
  selectSearchAllDomain,
};
