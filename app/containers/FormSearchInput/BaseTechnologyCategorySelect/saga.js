import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_BASE_TECHNOLOGY_CATEGORIES } from './constants'
import { baseTechnologyCategoriesLoaded, baseTechnologyCategoriesLoadingError } from './actions'
import request from '../../../utils/request'

export function* getBaseTechnologyCategories() {
  try {
    const response = yield call(request, '/base-technology-categories')
    yield put(baseTechnologyCategoriesLoaded(response.data))
  } catch (err) {
    yield put(baseTechnologyCategoriesLoadingError(err))
  }
}

export default function* baseTechnologyCategoriesData() {
  yield takeLatest(LOAD_BASE_TECHNOLOGY_CATEGORIES, getBaseTechnologyCategories)
}
