import { fromJS } from 'immutable'
import {
  LOAD_HOT_PROFILES,
  LOAD_HOT_PROFILES_SUCCESS,
  LOAD_HOT_PROFILES_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
})

const hotProfileSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOT_PROFILES:
      return state.set('loading', true)
        .set('data', fromJS([]))
    case LOAD_HOT_PROFILES_SUCCESS:
      return state.set('loading', false)
        .set('data', fromJS(action.data))
    case LOAD_HOT_PROFILES_ERROR:
      return state.set('loading', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default hotProfileSliderReducer

