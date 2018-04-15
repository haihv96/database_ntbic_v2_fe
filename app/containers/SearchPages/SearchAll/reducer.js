import { fromJS } from 'immutable'
import {
  LOAD_PROFILES,
  LOAD_PROFILES_SUCCESS,
  LOAD_COMPANIES,
  LOAD_COMPANIES_SUCCESS,
  LOAD_PATENTS,
  LOAD_PATENTS_SUCCESS,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
} from './constants'

const initialState = fromJS({
  profiles: {
    loading: false,
    data: [],
  },
  projects: {
    loading: false,
    data: [],
  },
  products: {
    loading: false,
    data: [],
  },
  patents: {
    loading: false,
    data: [],
  },
  companies: {
    loading: false,
    data: [],
  },
})

const searchAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILES:
      return state.setIn(['profiles', 'loading'], true)
    case LOAD_PRODUCTS:
      return state.setIn(['products', 'loading'], true)
    case LOAD_PATENTS:
      return state.setIn(['patents', 'loading'], true)
    case LOAD_PROJECTS:
      return state.setIn(['projects', 'loading'], true)
    case LOAD_COMPANIES:
      return state.setIn(['companies', 'loading'], true)
    case LOAD_PROFILES_SUCCESS:
      return state.setIn(['profiles', 'loading'], false)
        .setIn(['profiles', 'data'], fromJS(action.data))
    case LOAD_PRODUCTS_SUCCESS:
      return state.setIn(['products', 'loading'], false)
        .setIn(['products', 'data'], fromJS(action.data))
    case LOAD_PATENTS_SUCCESS:
      return state.setIn(['patents', 'loading'], false)
        .setIn(['patents', 'data'], fromJS(action.data))
    case LOAD_PROJECTS_SUCCESS:
      return state.setIn(['projects', 'loading'], false)
        .setIn(['projects', 'data'], fromJS(action.data))
    case LOAD_COMPANIES_SUCCESS:
      return state.setIn(['companies', 'loading'], false)
        .setIn(['companies', 'data'], fromJS(action.data))
    default:
      return state
  }
}

export default searchAllReducer
