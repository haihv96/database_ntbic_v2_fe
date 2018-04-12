import { createSelector } from 'reselect'

const specializationSelectState = state => state.getIn(['formSearchInput','specialization'])

const selectSpecializationValue = () => createSelector(
  specializationSelectState,
  state => state.get('value')
)

const selectLoading = () => createSelector(
  specializationSelectState,
  state => state.get('loading')
)

const selectSpecializationsData = () => createSelector(
  specializationSelectState,
  state => state.get('data').toJS()
)

export {
  selectSpecializationValue,
  selectLoading,
  selectSpecializationsData,
}
