import {
  CHANGE_QUERY,
} from './constants'

export const changeQuery = value => {
  return {
    type: CHANGE_QUERY,
    value,
  }
}
