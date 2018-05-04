import { call, put, takeLatest, select } from 'redux-saga/effects'
import { LOAD_COMPANIES } from './constants'
import { companiesLoaded } from './actions'
import request from '../../../utils/request'
import { queryAPIValue } from '../../FormSearchInput/selectors'

export function* getCompanies() {
  try {
    const query = yield select(queryAPIValue())
    const response = yield call(request, query)
    yield put(companiesLoaded(response))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchCompaniesData() {
  yield takeLatest(LOAD_COMPANIES, getCompanies)
}
