import {
  CHANGE_PAGINATION_PARAM,
  RESET_PAGINATION_PARAM,
} from './constants'

export const changePaginationParam = value => {
  return {
    type: CHANGE_PAGINATION_PARAM,
    value,
  }
}

export const resetPaginationParam = () => {
  return {
    type: RESET_PAGINATION_PARAM,
  }
}
