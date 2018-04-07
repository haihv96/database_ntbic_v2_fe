import { createSelector } from 'reselect'

const hotProfileSliderState = state => state.get('hotProfileSlider')

const selectHotProfileSliderLoading = () => createSelector(
  hotProfileSliderState,
  state => state.get('loading')
)

const selectHotProfileSliderData = () => createSelector(
  hotProfileSliderState,
  state => state.get('data').toJS()
)

export {
  selectHotProfileSliderData,
  selectHotProfileSliderLoading,
}
