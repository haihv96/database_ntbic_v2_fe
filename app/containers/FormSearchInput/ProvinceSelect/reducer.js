import { fromJS } from 'immutable'
import {
  CHANGE_PROVINCE,
  LOAD_PROVINCES,
  LOAD_PROVINCES_SUCCESS,
  LOAD_PROVINCES_ERROR,
} from './constants'
import { RESET_VALUE } from '../constants'
import { ALL_VALUE } from '../../../globals/constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
  value: ALL_VALUE,
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
    case RESET_VALUE:
      return state.set('value', initialState.get('value'))
    default:
      return state
  }
}

export default provinceSelectReducer
