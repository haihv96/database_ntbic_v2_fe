import { fromJS } from 'immutable'
import {
  CHANGE_SPECIALIZATION,
  LOAD_SPECIALIZATIONS,
  LOAD_SPECIALIZATIONS_SUCCESS,
  LOAD_SPECIALIZATIONS_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
  value: 'all',
})

const specializationSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SPECIALIZATION:
      return state.set('value', action.value)
    case LOAD_SPECIALIZATIONS:
      return state.set('loading', true)
    case LOAD_SPECIALIZATIONS_SUCCESS:
      return state.set('loading', false).set('data', action.data)
    case LOAD_SPECIALIZATIONS_ERROR:
      return state.set('loading', false).set('error', action.error)
    default:
      return state
  }
}

export default specializationSelectReducer
