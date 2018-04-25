import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_PROJECTS } from './constants'
import { projectsLoaded } from './actions'
import request from '../../../utils/request'
import { compressPathSearchRequest } from '../../SearchPages/utils'

export function* getProjects() {
  try {
    const query = yield compressPathSearchRequest()
    const response = yield call(request, query)
    yield put(projectsLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchProjectsData() {
  yield takeLatest(LOAD_PROJECTS, getProjects)
}
