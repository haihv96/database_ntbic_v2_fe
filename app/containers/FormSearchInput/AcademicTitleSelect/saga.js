import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_ACADEMIC_TITLES } from './constants'
import { academicTitlesLoaded, academicTitlesLoadingError } from './actions'
import request from '../../../utils/request'

export function* getAcademicTitles() {
  try {
    const response = yield call(request, '/academic-titles')
    yield put(academicTitlesLoaded(response.data))
  } catch (err) {
    yield put(academicTitlesLoadingError(err))
  }
}

export default function* academicTitlesData() {
  yield takeLatest(LOAD_ACADEMIC_TITLES, getAcademicTitles)
}
