import { createSelector } from 'reselect'

const provinceSelectState = state => state.get('FormSearchInput/ProvinceSelect')

const selectProvinceValue = () => createSelector(
  provinceSelectState,
  state => state.get('value')
)

const selectLoading = () => createSelector(
  provinceSelectState,
  state => state.get('loading')
)

const selectProvincesData = () => createSelector(
  provinceSelectState,
  state => state.get('data').toJS()
)

export {
  selectProvinceValue,
  selectLoading,
  selectProvincesData,
}
