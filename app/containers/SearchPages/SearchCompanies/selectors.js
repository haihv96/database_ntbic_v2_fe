import { createSelector } from 'reselect'

const searchAllState = state => state.get('searchCompanies')

const selectCompaniesLoading = () => createSelector(
  searchAllState,
  state => state.get('loading')
)

const selectCompaniesData = () => createSelector(
  searchAllState,
  state => state.get('data').toJS()
)


export {
  selectCompaniesData,
  selectCompaniesLoading,
}
