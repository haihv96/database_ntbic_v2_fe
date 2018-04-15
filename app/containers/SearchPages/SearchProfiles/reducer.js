import { fromJS } from 'immutable'
import {
  LOAD_PROFILES,
  LOAD_PROFILES_SUCCESS,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
})

const searchProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILES:
      return state.set('loading', true)
    case LOAD_PROFILES_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    default:
      return state
  }
}

export default searchProfilesReducer
