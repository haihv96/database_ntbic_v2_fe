import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_PATENT_TYPES } from './constants'
import { patentTypesLoaded, patentTypesLoadingError } from './actions'
import request from '../../../utils/request'

export function* getPatentTypes() {
  try {
    const response = yield call(request, '/patent-types')
    yield put(patentTypesLoaded(response.data))
  } catch (err) {
    yield put(patentTypesLoadingError(err))
  }
}

export default function* patentTypesData() {
  yield takeLatest(LOAD_PATENT_TYPES, getPatentTypes)
}
