import { fromJS } from 'immutable'
import {
  CHANGE_SPECIALIZATION,
  LOAD_SPECIALIZATIONS,
  LOAD_SPECIALIZATIONS_SUCCESS,
  LOAD_SPECIALIZATIONS_ERROR,
  RESET_SPECIALIZATION_VALUE,
} from './constants'
import { RESET_VALUE } from '../constants'
import { ALL_VALUE } from '../../../globals/constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
  value: ALL_VALUE,
})

const specializationSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SPECIALIZATION:
      return state.set('value', action.value)
    case LOAD_SPECIALIZATIONS:
      return state.set('loading', true)
    case LOAD_SPECIALIZATIONS_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    case LOAD_SPECIALIZATIONS_ERROR:
      return state.set('loading', false).set('error', action.error)
    case RESET_VALUE:
      return state.set('value', initialState.get('value'))
    case RESET_SPECIALIZATION_VALUE:
      return state.set('value', initialState.get('value'))
    default:
      return state
  }
}

export default specializationSelectReducer
