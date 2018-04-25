import { fromJS } from 'immutable'
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
} from './constants'

const initialState = fromJS({
  loading: false,
  data: [],
})

const searchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return state.set('loading', true)
    case LOAD_PRODUCTS_SUCCESS:
      return state.set('loading', false).set('data', fromJS(action.data))
    default:
      return state
  }
}

export default searchProductsReducer
