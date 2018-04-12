import { fromJS } from 'immutable'
import {
  CHANGE_DATA_TYPE,
} from './constants'
import { ALL_VALUE } from '../../../globals/constants'

const initialState = fromJS({
  dataType: ALL_VALUE,
})

const dataTypeSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATA_TYPE:
      return state.set('dataType', action.value)
    default:
      return state
  }
}

export default dataTypeSelectReducer
