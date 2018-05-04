import { call, put, takeLatest, select } from 'redux-saga/effects'
import { LOAD_PROFILES } from './constants'
import { profilesLoaded } from './actions'
import request from '../../../utils/request'
import { queryAPIValue } from '../../FormSearchInput/selectors'

export function* getProfiles() {
  try {
    const query = yield select(queryAPIValue())
    const response = yield call(request, query)
    yield put(profilesLoaded(response))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchProfilesData() {
  yield takeLatest(LOAD_PROFILES, getProfiles)
}
