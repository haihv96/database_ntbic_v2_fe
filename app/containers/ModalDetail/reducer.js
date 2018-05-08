import { fromJS } from 'immutable'
import {
  OPEN_MODAL_DETAIL,
  CLOSE_MODAL_DETAIL,
  LOAD_DATA_DETAIL,
  LOAD_DATA_DETAIL_SUCCESS,
} from './constants'

const initialState = fromJS({
  isOpen: false,
  id: null,
  dataType: null,
  loadingData: false,
  data: null,
})

const modalDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_DETAIL:
      return state
        .set('isOpen', true)
        .set('id', action.id)
        .set('dataType', action.dataType)
    case LOAD_DATA_DETAIL:
      return state
        .set('loadingData', true)
    case LOAD_DATA_DETAIL_SUCCESS:
      return state
        .set('loadingData', false)
        .set('data', action.data)
    case CLOSE_MODAL_DETAIL:
      return state
        .set('loadingData', false)
        .set('isOpen', false)
    default:
      return state
  }
}

export default modalDetailReducer
