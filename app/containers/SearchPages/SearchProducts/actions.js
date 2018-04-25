import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
} from './constants'

export const loadProducts = () => {
  return {
    type: LOAD_PRODUCTS,
  }
}

export const productsLoaded = data => {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    data,
  }
}
