import { call, put, takeLatest, select } from 'redux-saga/effects'
import { LOAD_PRODUCTS } from './constants'
import { productsLoaded } from './actions'
import request from '../../../utils/request'
import { queryAPIValue } from '../../FormSearchInput/selectors'

export function* getProducts() {
  try {
    const query = yield select(queryAPIValue())
    const response = yield call(request, query)
    yield put(productsLoaded(response))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchProductsData() {
  yield takeLatest(LOAD_PRODUCTS, getProducts)
}
