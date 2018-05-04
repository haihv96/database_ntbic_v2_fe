import { fromJS } from 'immutable'
import {
  CHANGE_PAGINATION_PARAM,
  RESET_PAGINATION_PARAM,
} from './constants'

const initialState = fromJS({
  paginationParam: 1,
})

const paginationParamSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGINATION_PARAM:
      return state.set('paginationParam', action.value)
    case RESET_PAGINATION_PARAM:
      return state.set('paginationParam', initialState.get('value'))
    default:
      return state
  }
}

export default paginationParamSelectReducer
