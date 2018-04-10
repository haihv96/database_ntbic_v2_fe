import {
  CHANGE_TECHNOLOGY_CATEGORY,
  LOAD_TECHNOLOGY_CATEGORIES,
  LOAD_TECHNOLOGY_CATEGORIES_SUCCESS,
  LOAD_TECHNOLOGY_CATEGORIES_ERROR,
} from './constants'

export const changeTechnologyCategory = value => {
  return {
    type: CHANGE_TECHNOLOGY_CATEGORY,
    value,
  }
}

export const loadTechnologyCategories = () => {
  return {
    type: LOAD_TECHNOLOGY_CATEGORIES,
  }
}

export const technologyCategoriesLoaded = data => {
  return {
    type: LOAD_TECHNOLOGY_CATEGORIES_SUCCESS,
    data,
  }
}

export const technologyCategoriesLoadingError = error => {
  return {
    type: LOAD_TECHNOLOGY_CATEGORIES_ERROR,
    error,
  }
}
