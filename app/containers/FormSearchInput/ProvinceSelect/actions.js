import {
  CHANGE_PROVINCE,
  LOAD_PROVINCES,
  LOAD_PROVINCES_SUCCESS,
  LOAD_PROVINCES_ERROR,
} from './constants'

export const changeProvince = value => {
  return {
    type: CHANGE_PROVINCE,
    value,
  }
}

export const loadProvinces = () => {
  return {
    type: LOAD_PROVINCES,
  }
}

export const provincesLoaded = data => {
  return {
    type: LOAD_PROVINCES_SUCCESS,
    data,
  }
}

export const provincesLoadingError = error => {
  return {
    type: LOAD_PROVINCES_ERROR,
    error,
  }
}
