import { createSelector } from 'reselect'

const searchAllState = state => state.get('searchAll')

const selectProfilesLoading = () => createSelector(
  searchAllState,
  state => state.getIn(['profiles', 'loading'])
)

const selectPatentsLoading = () => createSelector(
  searchAllState,
  state => state.getIn(['patents', 'loading'])
)

const selectProjectsLoading = () => createSelector(
  searchAllState,
  state => state.getIn(['projects', 'loading'])
)

const selectProductsLoading = () => createSelector(
  searchAllState,
  state => state.getIn(['products', 'loading'])
)

const selectCompaniesLoading = () => createSelector(
  searchAllState,
  state => state.getIn(['companies', 'loading'])
)

const selectProfilesData = () => createSelector(
  searchAllState,
  state => state.getIn(['profiles', 'data']).toJS()
)

const selectPatentsData = () => createSelector(
  searchAllState,
  state => state.getIn(['patents', 'data']).toJS()
)

const selectProjectsData = () => createSelector(
  searchAllState,
  state => state.getIn(['projects', 'data']).toJS()
)

const selectProductsData = () => createSelector(
  searchAllState,
  state => state.getIn(['products', 'data']).toJS()
)

const selectCompaniesData = () => createSelector(
  searchAllState,
  state => state.getIn(['companies', 'data']).toJS()
)

export {
  selectCompaniesData,
  selectCompaniesLoading,
  selectPatentsData,
  selectPatentsLoading,
  selectProductsData,
  selectProductsLoading,
  selectProfilesData,
  selectProfilesLoading,
  selectProjectsData,
  selectProjectsLoading,
}
