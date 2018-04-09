import { createSelector } from 'reselect'

const searchAreaState = state => state.get('searchArea')

const selectType = () => createSelector(
  searchAreaState,
  state => state.get('type')
)

const selectQuery = () => createSelector(
  searchAreaState,
  state =>  state.get('query')
)

export {
  selectType,
  selectQuery,
}
