import { fromJS } from 'immutable'
import {
  CHANGE_PROVINCE,
  LOAD_PROVINCES,
  LOAD_PROVINCES_SUCCESS,
  LOAD_PROVINCES_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
  value: 'all',
})

const provinceSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROVINCE:
      return state.set('value', action.value)
    case LOAD_PROVINCES:
      return state.set('loading', true)
    case LOAD_PROVINCES_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    case LOAD_PROVINCES_ERROR:
      return state.set('loading', false).set('error', action.error)
    default:
      return state
  }
}

export default provinceSelectReducer
