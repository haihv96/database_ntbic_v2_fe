import { fromJS } from 'immutable'
import {
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
})

const searchProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECTS:
      return state.set('loading', true)
    case LOAD_PROJECTS_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    default:
      return state
  }
}

export default searchProjectsReducer
