import { createSelector } from 'reselect'

const queryInputState = state => state.get('FormSearchInput/QueryInput')

const selectQuery = () => createSelector(
  queryInputState,
  state =>  state.get('query')
)

export {
  selectQuery,
}
