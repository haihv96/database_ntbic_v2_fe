import { fromJS } from 'immutable'
import {
  CHANGE_QUERY,
} from './constants'

const initialState = fromJS({
  query: '',
})

const queryInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      return state.set('query', action.value)
    default:
      return state
  }
}

export default queryInputReducer
