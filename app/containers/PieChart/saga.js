import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_ANALYSIS } from './constants'
import { analysisLoaded, analysisLoadingError } from './actions'
import request from '../../utils/request'

export function* getAnalysis() {
  try {
    const response = yield call(request, '/analysis')
    yield put(analysisLoaded(response.data))
  } catch (err) {
    yield put(analysisLoadingError(err))
  }
}

export default function* analysisData() {
  yield takeLatest(LOAD_ANALYSIS, getAnalysis)
}
