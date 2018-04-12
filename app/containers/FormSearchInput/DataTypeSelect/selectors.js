import { createSelector } from 'reselect'

const dataTypeSelectState = state => state.getIn(['formSearchInput', 'dataType'])

const selectDataType = () => createSelector(
  dataTypeSelectState,
  state => state.get('dataType')
)

export {
  selectDataType,
}
