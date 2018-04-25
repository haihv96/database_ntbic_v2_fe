import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_PATENTS } from './constants'
import { patentsLoaded } from './actions'
import request from '../../../utils/request'
import { compressPathSearchRequest } from '../../SearchPages/utils'

export function* getPatents() {
  try {
    const query = yield compressPathSearchRequest()
    const response = yield call(request, query)
    yield put(patentsLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchPatentsData() {
  yield takeLatest(LOAD_PATENTS, getPatents)
}
