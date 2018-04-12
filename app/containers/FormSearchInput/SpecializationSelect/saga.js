import { call, put, select, takeLatest } from 'redux-saga/effects'
import { LOAD_SPECIALIZATIONS } from './constants'
import { selectTechnologyCategoryValue } from '../TechnologyCategorySelect/selectors'
import { specializationsLoaded, specializationsLoadingError } from './actions'
import request from '../../../utils/request'

export function* getSpecializations() {
  try {
    const techCateId = yield select(selectTechnologyCategoryValue())
    const response = yield call(
      request,
      `/technology-categories/${techCateId}/specializations`
    )
    yield put(specializationsLoaded(response.data))
  } catch (err) {
    yield put(specializationsLoadingError(err))
  }
}

export default function* specializationsData() {
  yield takeLatest(LOAD_SPECIALIZATIONS, getSpecializations)
}
