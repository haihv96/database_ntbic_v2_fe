import { createSelector } from 'reselect'

const dataTypeSelectState = state => state.get('FormSearchInput/DataTypeSelect')

const selectDataType = () => createSelector(
  dataTypeSelectState,
  state => state.get('dataType')
)

export {
  selectDataType,
}
