import { fromJS } from 'immutable'
import {
  CHANGE_QUERY,
} from './constants'
import { RESET_VALUE } from '../constants'
import { ALL_VALUE } from '../../../globals/constants'

const initialState = fromJS({
  query: ALL_VALUE,
})

const queryInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      return state.set('query', action.value)
    case RESET_VALUE:
      return state.set('query', initialState.get('query'))
    default:
      return state
  }
}

export default queryInputReducer
