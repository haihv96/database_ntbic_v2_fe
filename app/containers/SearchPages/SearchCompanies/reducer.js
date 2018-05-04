import { fromJS } from 'immutable'
import {
  LOAD_COMPANIES,
  LOAD_COMPANIES_SUCCESS,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: {},
})

const searchCompaniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPANIES:
      return state.set('loading', true)
    case LOAD_COMPANIES_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    default:
      return state
  }
}

export default searchCompaniesReducer
