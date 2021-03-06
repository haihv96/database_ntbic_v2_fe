import { fromJS } from 'immutable'
import {
  LOAD_ANALYSIS,
  LOAD_ANALYSIS_SUCCESS,
  LOAD_ANALYSIS_ERROR,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: {},
  error: null,
})

const pieChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ANALYSIS:
      return state.set('loading', true)
        .set('data', fromJS({}))
    case LOAD_ANALYSIS_SUCCESS:
      return state.set('loading', false)
        .set('data', fromJS(action.data))
    case LOAD_ANALYSIS_ERROR:
      return state.set('loading', false)
        .set('error', action.error)
    default:
      return state
  }
}

export default pieChartReducer
