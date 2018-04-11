import { call, put, takeLatest } from 'redux-saga/effects'
import { LOAD_TECHNOLOGY_CATEGORIES } from './constants'
import { technologyCategoriesLoaded, technologyCategoriesLoadingError } from './actions'
import request from '../../../utils/request'

export function* getTechnologyCategories() {
  try {
    const response = yield call(request, '/technology-categories')
    yield put(technologyCategoriesLoaded(response.data))
  } catch (err) {
    yield put(technologyCategoriesLoadingError(err))
  }
}

export default function* technologyCategoriesData() {
  yield takeLatest(LOAD_TECHNOLOGY_CATEGORIES, getTechnologyCategories)
}
