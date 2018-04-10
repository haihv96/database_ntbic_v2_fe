import {
  CHANGE_BASE_TECHNOLOGY_CATEGORY,
  LOAD_BASE_TECHNOLOGY_CATEGORIES,
  LOAD_BASE_TECHNOLOGY_CATEGORIES_SUCCESS,
  LOAD_BASE_TECHNOLOGY_CATEGORIES_ERROR,
} from './constants'

export const changeBaseTechnologyCategory = value => {
  return {
    type: CHANGE_BASE_TECHNOLOGY_CATEGORY,
    value,
  }
}

export const loadBaseTechnologyCategories = () => {
  return {
    type: LOAD_BASE_TECHNOLOGY_CATEGORIES,
  }
}

export const baseTechnologyCategoriesLoaded = data => {
  return {
    type: LOAD_BASE_TECHNOLOGY_CATEGORIES_SUCCESS,
    data,
  }
}

export const baseTechnologyCategoriesLoadingError = error => {
  return {
    type: LOAD_BASE_TECHNOLOGY_CATEGORIES_ERROR,
    error,
  }
}
