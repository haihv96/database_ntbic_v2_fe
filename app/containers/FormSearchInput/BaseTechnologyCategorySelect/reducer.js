import { fromJS } from 'immutable'
import {
  CHANGE_BASE_TECHNOLOGY_CATEGORY,
  LOAD_BASE_TECHNOLOGY_CATEGORIES,
  LOAD_BASE_TECHNOLOGY_CATEGORIES_SUCCESS,
  LOAD_BASE_TECHNOLOGY_CATEGORIES_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
  value: 'all',
})

const baseTechnologyCategorySelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BASE_TECHNOLOGY_CATEGORY:
      return state.set('value', action.value)
    case LOAD_BASE_TECHNOLOGY_CATEGORIES:
      return state.set('loading', true)
    case LOAD_BASE_TECHNOLOGY_CATEGORIES_SUCCESS:
      return state.set('loading', false).set('data', action.data)
    case LOAD_BASE_TECHNOLOGY_CATEGORIES_ERROR:
      return state.set('loading', false).set('error', action.error)
    default:
      return state
  }
}

export default baseTechnologyCategorySelectReducer
