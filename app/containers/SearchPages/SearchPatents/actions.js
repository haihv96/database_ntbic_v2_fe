import {
  LOAD_PATENTS,
  LOAD_PATENTS_SUCCESS,
} from './constants'

export const loadPatents = () => {
  return {
    type: LOAD_PATENTS,
  }
}

export const patentsLoaded = data => {
  return {
    type: LOAD_PATENTS_SUCCESS,
    data,
  }
}
