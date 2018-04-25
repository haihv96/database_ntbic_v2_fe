import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_COMPANIES } from './constants'
import { companiesLoaded } from './actions'
import request from '../../../utils/request'
import { compressPathSearchRequest } from '../../SearchPages/utils'

export function* getCompanies() {
  try {
    const query = yield compressPathSearchRequest()
    const response = yield call(request, query)
    yield put(companiesLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchCompaniesData() {
  yield takeLatest(LOAD_COMPANIES, getCompanies)
}
