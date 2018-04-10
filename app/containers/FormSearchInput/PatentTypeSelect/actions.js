import {
  CHANGE_PATENT_TYPE,
  LOAD_PATENT_TYPES,
  LOAD_PATENT_TYPES_SUCCESS,
  LOAD_PATENT_TYPES_ERROR,
} from './constants'

export const changePatentType = value => {
  return {
    type: CHANGE_PATENT_TYPE,
    value,
  }
}

export const loadPatentTypes = () => {
  return {
    type: LOAD_PATENT_TYPES,
  }
}

export const patentTypesLoaded = data => {
  return {
    type: LOAD_PATENT_TYPES_SUCCESS,
    data,
  }
}

export const patentTypesLoadingError = error => {
  return {
    type: LOAD_PATENT_TYPES_ERROR,
    error,
  }
}
