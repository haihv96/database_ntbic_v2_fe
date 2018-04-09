import { createSelector } from 'reselect'

const searchInputState = state => state.get('searchInput')

const selectDataType = () => createSelector(
  searchInputState,
  state => state.get('dataType')
);

const selectQuery = () => createSelector(
  searchInputState,
  state =>  state.get('query')
)

export {
  selectDataType,
  selectQuery,
}
