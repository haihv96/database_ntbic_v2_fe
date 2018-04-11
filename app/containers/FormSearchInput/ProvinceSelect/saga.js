import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_PROVINCES } from './constants'
import { provincesLoaded, provincesLoadingError } from './actions'
import request from '../../../utils/request'

export function* getProvinces() {
  try {
    const response = yield call(request, '/provinces')
    yield put(provincesLoaded(response.data))
  } catch (err) {
    yield put(provincesLoadingError(err))
  }
}

export default function* provincesData() {
  yield takeLatest(LOAD_PROVINCES, getProvinces)
}
