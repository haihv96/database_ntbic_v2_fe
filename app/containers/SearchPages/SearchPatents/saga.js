import { call, put, takeLatest, select } from 'redux-saga/effects'
import { LOAD_PATENTS } from './constants'
import { patentsLoaded } from './actions'
import request from '../../../utils/request'
import { queryAPIValue } from '../../FormSearchInput/selectors'

export function* getPatents() {
  try {
    const query = yield select(queryAPIValue())
    const response = yield call(request, query)
    yield put(patentsLoaded(response))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchPatentsData() {
  yield takeLatest(LOAD_PATENTS, getPatents)
}
