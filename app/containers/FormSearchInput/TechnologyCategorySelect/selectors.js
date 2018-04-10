import { createSelector } from 'reselect'

const technologyCategorySelectState = state => state.get('FormSearchInput/TechnologyCategorySelect')

const selectTechnologyCategoryValue = () => createSelector(
  technologyCategorySelectState,
  state => state.get('value')
)

const selectLoading = () => createSelector(
  technologyCategorySelectState,
  state => state.get('loading')
)

const selectTechnologyCategoriesData = () => createSelector(
  technologyCategorySelectState,
  state => state.get('data').toJS()
)

export {
  selectTechnologyCategoryValue,
  selectLoading,
  selectTechnologyCategoriesData,
}
