import { createSelector } from 'reselect'

const paginationParamSelectState = state => state.getIn(['formSearchInput', 'paginationParam'])

const selectPaginationParam = () => createSelector(
  paginationParamSelectState,
  state => state.get('paginationParam')
)

export {
  selectPaginationParam,
}
