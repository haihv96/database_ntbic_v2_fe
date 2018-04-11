import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_SPECIALIZATIONS } from './constants'
import { specializationsLoaded, specializationsLoadingError } from './actions'
import request from '../../../utils/request'

export function* getSpecializations() {
  try {
    const response = yield call(request, '/specializations')
    yield put(specializationsLoaded(response.data))
  } catch (err) {
    yield put(specializationsLoadingError(err))
  }
}

export default function* specializationsData() {
  yield takeLatest(LOAD_SPECIALIZATIONS, getSpecializations)
}
