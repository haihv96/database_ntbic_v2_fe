import { call, put, takeLatest, select } from 'redux-saga/effects'
import { LOAD_DATA_DETAIL } from './constants'
import { dataDetailLoaded } from './actions'
import request from '../../utils/request'
import { selectModalDetailId, selectModalDetailDataType } from './selectors'

export function* getCompanies() {
  try {
    const id = yield select(selectModalDetailId())
    const dataType = yield select(selectModalDetailDataType())
    const response = yield call(request, `/${dataType}/${id}`)
    yield put(dataDetailLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export default function* loadDataDetail() {
  yield takeLatest(LOAD_DATA_DETAIL, getCompanies)
}
