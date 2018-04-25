import {
  LOAD_COMPANIES,
  LOAD_COMPANIES_SUCCESS,
} from './constants'

export const loadCompanies = () => {
  return {
    type: LOAD_COMPANIES,
  }
}

export const companiesLoaded = data => {
  return {
    type: LOAD_COMPANIES_SUCCESS,
    data,
  }
}
