import { fromJS } from 'immutable'
import {
  CHANGE_DATA_TYPE,
  CHANGE_QUERY,
} from './constants'

const initialState = fromJS({
  dataType: 'all',
  query: '',
})

const searchAreaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATA_TYPE:
      return state.set('dataType', action.value)
    case CHANGE_QUERY:
      return state.set('query', action.value)
    default:
      return state
  }
}

export default searchAreaReducer
