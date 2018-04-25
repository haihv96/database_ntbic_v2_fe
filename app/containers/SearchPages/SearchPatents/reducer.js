import { fromJS } from 'immutable'
import {
  LOAD_PATENTS,
  LOAD_PATENTS_SUCCESS,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
})

const searchPatentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PATENTS:
      return state.set('loading', true)
    case LOAD_PATENTS_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    default:
      return state
  }
}

export default searchPatentsReducer
