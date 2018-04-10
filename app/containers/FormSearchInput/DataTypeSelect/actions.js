import {
  CHANGE_DATA_TYPE,
} from './constants'

export const changeDataType = value => {
  return {
    type: CHANGE_DATA_TYPE,
    value,
  }
}
