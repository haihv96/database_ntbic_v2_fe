import { call, put, takeLatest, select } from 'redux-saga/effects'
import { LOAD_PROJECTS } from './constants'
import { projectsLoaded } from './actions'
import request from '../../../utils/request'
import { queryAPIValue } from '../../FormSearchInput/selectors'

export function* getProjects() {
  try {
    const query = yield select(queryAPIValue())
    const response = yield call(request, query)
    yield put(projectsLoaded(response))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchProjectsData() {
  yield takeLatest(LOAD_PROJECTS, getProjects)
}
