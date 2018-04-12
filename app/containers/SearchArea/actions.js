import {
  CHANGE_TYPE,
  CHANGE_QUERY,
} from './constants'

export const changeType = value => {
  return {
    type: CHANGE_TYPE,
    value,
  }
}

export const changeQuery = value => {
  return {
    type: CHANGE_QUERY,
    value,
  }
}
