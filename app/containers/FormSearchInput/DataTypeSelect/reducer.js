import { fromJS } from 'immutable'
import {
  CHANGE_DATA_TYPE,
} from './constants'

const initialState = fromJS({
  dataType: 'all',
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
