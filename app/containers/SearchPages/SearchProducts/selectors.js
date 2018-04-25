import { createSelector } from 'reselect'

const searchAllState = state => state.get('searchProducts')

const selectProductsLoading = () => createSelector(
  searchAllState,
  state => state.get('loading')
)

const selectProductsData = () => createSelector(
  searchAllState,
  state => state.get('data').toJS()
)


export {
  selectProductsData,
  selectProductsLoading,
}
