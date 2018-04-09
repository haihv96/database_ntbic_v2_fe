import {
  CHANGE_DATA_TYPE,
  CHANGE_QUERY,
} from './constants'

export const changeDataType = value => {
  return {
    type: CHANGE_DATA_TYPE,
    value,
  }
}

export const changeQuery = value => {
  return {
    type: CHANGE_QUERY,
    value,
  }
}
