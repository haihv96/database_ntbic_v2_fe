import { createSelector } from 'reselect'

const baseTechnologyCategorySelectState = state => state.get('FormSearchInput/BaseTechnologyCategorySelect')

const selectBaseTechnologyCategoryValue = () => createSelector(
  baseTechnologyCategorySelectState,
  state => state.get('value')
)

const selectLoading = () => createSelector(
  baseTechnologyCategorySelectState,
  state => state.get('loading')
)

const selectBaseTechnologyCategoriesData = () => createSelector(
  baseTechnologyCategorySelectState,
  state => state.get('data').toJS()
)

export {
  selectBaseTechnologyCategoryValue,
  selectLoading,
  selectBaseTechnologyCategoriesData,
}
