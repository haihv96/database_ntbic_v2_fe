import { createSelector } from 'reselect'

const queryInputState = state => state.getIn(['formSearchInput', 'queryInput'])

const selectQuery = () => createSelector(
  queryInputState,
  state => state.get('query')
)

export {
  selectQuery,
}
