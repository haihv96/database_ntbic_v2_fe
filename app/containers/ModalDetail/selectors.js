import { createSelector } from 'reselect'

const modalDetailState = (state) => state.get('modalDetail')

const selectModalDetailIsOpen = () => createSelector(
  modalDetailState,
  state => state.get('isOpen')
)

const selectModalDetailId = () => createSelector(
  modalDetailState,
  state => state.get('id')
)

const selectModalDetailDataType = () => createSelector(
  modalDetailState,
  state => state.get('dataType')
)

const selectLoadingData = () => createSelector(
  modalDetailState,
  state => state.get('loadingData')
)

const selectModalDetailData = () => createSelector(
  modalDetailState,
  state => state.get('data')
)


export {
  selectModalDetailIsOpen,
  selectModalDetailDataType,
  selectModalDetailId,
  selectLoadingData,
  selectModalDetailData,
}
