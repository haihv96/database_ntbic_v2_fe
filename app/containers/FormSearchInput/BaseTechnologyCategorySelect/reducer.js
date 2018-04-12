import { fromJS } from 'immutable'
import {
  CHANGE_BASE_TECHNOLOGY_CATEGORY,
  LOAD_BASE_TECHNOLOGY_CATEGORIES,
  LOAD_BASE_TECHNOLOGY_CATEGORIES_SUCCESS,
  LOAD_BASE_TECHNOLOGY_CATEGORIES_ERROR,
} from './constants'
import { RESET_VALUE } from '../constants'
import { ALL_VALUE } from '../../../globals/constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
  value: ALL_VALUE,
})

const baseTechnologyCategorySelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BASE_TECHNOLOGY_CATEGORY:
      return state.set('value', action.value)
    case LOAD_BASE_TECHNOLOGY_CATEGORIES:
      return state.set('loading', true)
    case LOAD_BASE_TECHNOLOGY_CATEGORIES_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    case LOAD_BASE_TECHNOLOGY_CATEGORIES_ERROR:
      return state.set('loading', false).set('error', action.error)
    case RESET_VALUE:
      return state.set('value', initialState.get('value'))
    default:
      return state
  }
}

export default baseTechnologyCategorySelectReducer
