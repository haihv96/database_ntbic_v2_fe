import { createSelector } from 'reselect'

const searchAllState = state => state.get('searchProjects')

const selectProjectsLoading = () => createSelector(
  searchAllState,
  state => state.get('loading')
)

const selectProjectsData = () => createSelector(
  searchAllState,
  state => state.get('data').toJS()
)


export {
  selectProjectsData,
  selectProjectsLoading,
}
