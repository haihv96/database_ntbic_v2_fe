import {
  CHANGE_SPECIALIZATION,
  LOAD_SPECIALIZATIONS,
  LOAD_SPECIALIZATIONS_SUCCESS,
  LOAD_SPECIALIZATIONS_ERROR,
  RESET_SPECIALIZATION_VALUE,
} from './constants'

export const changeSpecialization = value => {
  return {
    type: CHANGE_SPECIALIZATION,
    value,
  }
}

export const loadSpecializations = () => {
  return {
    type: LOAD_SPECIALIZATIONS,
  }
}

export const specializationsLoaded = data => {
  return {
    type: LOAD_SPECIALIZATIONS_SUCCESS,
    data,
  }
}

export const specializationsLoadingError = error => {
  return {
    type: LOAD_SPECIALIZATIONS_ERROR,
    error,
  }
}

export const resetSpecializationValue = () => {
  return {
    type: RESET_SPECIALIZATION_VALUE,
  }
}
