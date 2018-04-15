import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_PROFILES } from './constants'
import { profilesLoaded } from './actions'
import request from '../../../utils/request'
import { compressPathSearchRequest } from '../../SearchPages/utils'

export function* getProfiles() {
  try {
    const query = yield compressPathSearchRequest()
    const response = yield call(request, query)
    yield put(profilesLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchProfilesData() {
  yield takeLatest(LOAD_PROFILES, getProfiles)
}
