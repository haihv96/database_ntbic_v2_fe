import { call, put, takeLatest, select } from 'redux-saga/effects'
import { checkInputHasValue } from '../../../globals/utils'
import { selectQuery } from '../../FormSearchInput/QueryInput/selectors'
import {
  LOAD_COMPANIES,
  LOAD_PRODUCTS,
  LOAD_PROFILES,
  LOAD_PATENTS,
  LOAD_PROJECTS,
} from './constants'
import {
  patentsLoaded,
  productsLoaded,
  profilesLoaded,
  projectsLoaded,
  companiesLoaded,
} from './actions'
import request from '../../../utils/request'

function* getQuery() {
  const query = yield select(selectQuery())
  return checkInputHasValue(query) ? `&query=${query}` : ''
}

export function* getProfiles() {
  try {
    const query = yield getQuery()
    const response = yield call(request, `/profiles?per_page=5${query}`)
    yield put(profilesLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export function* getProjects() {
  try {
    const query = yield getQuery()
    const response = yield call(request, `/projects?per_page=5${query}`)
    yield put(projectsLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export function* getPatents() {
  try {
    const query = yield getQuery()
    const response = yield call(request, `/patents?per_page=5${query}`)
    yield put(patentsLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}


export function* getProducts() {
  try {
    const query = yield getQuery()
    const response = yield call(request, `/products?per_page=5${query}`)
    yield put(productsLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export function* getCompanies() {
  try {
    const query = yield getQuery()
    const response = yield call(request, `/companies?per_page=5${query}`)
    yield put(companiesLoaded(response.data))
  } catch (err) {
    console.log(err)
  }
}

export default function* searchAllData() {
  yield takeLatest(LOAD_PROFILES, getProfiles)
  yield takeLatest(LOAD_PROJECTS, getProjects)
  yield takeLatest(LOAD_PATENTS, getPatents)
  yield takeLatest(LOAD_PRODUCTS, getProducts)
  yield takeLatest(LOAD_COMPANIES, getCompanies)
}
