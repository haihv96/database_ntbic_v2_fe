import { fromJS } from 'immutable'
import {
  CHANGE_PATENT_TYPE,
  LOAD_PATENT_TYPES,
  LOAD_PATENT_TYPES_SUCCESS,
  LOAD_PATENT_TYPES_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
  value: 'all',
})

const patentTypeSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PATENT_TYPE:
      return state.set('value', action.value)
    case LOAD_PATENT_TYPES:
      return state.set('loading', true)
    case LOAD_PATENT_TYPES_SUCCESS:
      return state.set('loading', false).set('data', action.data)
    case LOAD_PATENT_TYPES_ERROR:
      return state.set('loading', false).set('error', action.error)
    default:
      return state
  }
}

export default patentTypeSelectReducer
