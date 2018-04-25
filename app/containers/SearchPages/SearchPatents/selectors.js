import { createSelector } from 'reselect'

const searchAllState = state => state.get('searchPatents')

const selectPatentsLoading = () => createSelector(
  searchAllState,
  state => state.get('loading')
)

const selectPatentsData = () => createSelector(
  searchAllState,
  state => state.get('data').toJS()
)


export {
  selectPatentsData,
  selectPatentsLoading,
}
