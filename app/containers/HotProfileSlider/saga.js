import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_HOT_PROFILES } from './constants'
import { hotProfilesLoaded, hotProfilesLoadingError } from './actions'
import request from '../../utils/request'

export function* getHotProfiles() {
  try {
    const response = yield call(request, '/profiles/query/top?limit=15')
    yield put(hotProfilesLoaded(response.data))
  } catch (err) {
    yield put(hotProfilesLoadingError(err))
  }
}

export default function* hotProfilesData() {
  yield takeLatest(LOAD_HOT_PROFILES, getHotProfiles)
}
