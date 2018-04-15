import { createSelector } from 'reselect'

const searchAllState = state => state.get('searchProfiles')

const selectProfilesLoading = () => createSelector(
  searchAllState,
  state => state.get('loading')
)

const selectProfilesData = () => createSelector(
  searchAllState,
  state => state.get('data').toJS()
)


export {
  selectProfilesData,
  selectProfilesLoading,
}
