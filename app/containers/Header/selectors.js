import { createSelector } from 'reselect';

const selectHeaderDomain = (state) => state.get('header');

const makeSelectHeader = () => createSelector(
  selectHeaderDomain,
  (substate) => substate.toJS()
);

export default makeSelectHeader;
export {
  selectHeaderDomain,
};
