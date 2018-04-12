import { createSelector } from 'reselect'

const academicTitleSelectState = state => state.getIn(['formSearchInput', 'academicTitle'])

const selectAcademicTitleValue = () => createSelector(
  academicTitleSelectState,
  state => state.get('value')
)

const selectLoading = () => createSelector(
  academicTitleSelectState,
  state => state.get('loading')
)

const selectAcademicTitlesData = () => createSelector(
  academicTitleSelectState,
  state => state.get('data').toJS()
)

export {
  selectAcademicTitleValue,
  selectLoading,
  selectAcademicTitlesData,
}
