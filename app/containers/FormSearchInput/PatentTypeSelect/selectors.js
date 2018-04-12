import { createSelector } from 'reselect'

const patentTypeSelectState = state => state.getIn(['formSearchInput', 'patentType'])

const selectPatentTypeValue = () => createSelector(
  patentTypeSelectState,
  state => state.get('value')
)

const selectLoading = () => createSelector(
  patentTypeSelectState,
  state => state.get('loading')
)

const selectPatentTypesData = () => createSelector(
  patentTypeSelectState,
  state => state.get('data').toJS()
)

export {
  selectPatentTypeValue,
  selectLoading,
  selectPatentTypesData,
}
