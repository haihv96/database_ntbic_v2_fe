import { fromJS } from 'immutable'
import {
  CHANGE_TYPE,
  CHANGE_QUERY,
} from './constants'

const initialState = fromJS({
  type: 'all',
  query: '',
})

const searchAreaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TYPE:
      return state.set('type', action.value)
    case CHANGE_QUERY:
      return state.set('query', action.value)
    default:
      return state
  }
}

export default searchAreaReducer
