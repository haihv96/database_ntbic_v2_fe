import {
  CHANGE_ACADEMIC_TITLE,
  LOAD_ACADEMIC_TITLES,
  LOAD_ACADEMIC_TITLES_SUCCESS,
  LOAD_ACADEMIC_TITLES_ERROR,
} from './constants'

export const changeAcademicTitle = value => {
  return {
    type: CHANGE_ACADEMIC_TITLE,
    value,
  }
}

export const loadAcademicTitles = () => {
  return {
    type: LOAD_ACADEMIC_TITLES,
  }
}

export const academicTitlesLoaded = data => {
  return {
    type: LOAD_ACADEMIC_TITLES_SUCCESS,
    data,
  }
}

export const academicTitlesLoadingError = error => {
  return {
    type: LOAD_ACADEMIC_TITLES_ERROR,
    error,
  }
}
