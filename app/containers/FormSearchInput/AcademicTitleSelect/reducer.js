import { fromJS } from 'immutable'
import {
  CHANGE_ACADEMIC_TITLE,
  LOAD_ACADEMIC_TITLES,
  LOAD_ACADEMIC_TITLES_SUCCESS,
  LOAD_ACADEMIC_TITLES_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
  error: null,
  value: 'all',
})

const academicTitleSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACADEMIC_TITLE:
      return state.set('value', action.value)
    case LOAD_ACADEMIC_TITLES:
      return state.set('loading', true)
    case LOAD_ACADEMIC_TITLES_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    case LOAD_ACADEMIC_TITLES_ERROR:
      return state.set('loading', false).set('error', action.error)
    default:
      return state
  }
}

export default academicTitleSelectReducer
