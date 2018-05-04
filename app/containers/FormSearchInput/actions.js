import {
  RESET_VALUE,
  CHANGE_QUERY_API,
} from './constants'

export const resetValue = () => {
  return {
    type: RESET_VALUE,
  }
}

export const changeQueryAPI = value => {
  return {
    type: CHANGE_QUERY_API,
    value,
  }
}
