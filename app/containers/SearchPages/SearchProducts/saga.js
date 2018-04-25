import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_PRODUCTS } from './constants'
import { productsLoaded } from './actions'
import request from '../../../utils/request'
import { compressPathSearchRequest } from '../../SearchPages/utils'

export function* getProducts() {
  try {
    const query = yield compressPathSearchRequest()
    const response = yield call(request, query)
    yield put(productsLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchProductsData() {
  yield takeLatest(LOAD_PRODUCTS, getProducts)
}
