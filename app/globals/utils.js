import { ALL_VALUE } from './constants'

export const checkInputHasValue = value => (
  value && value !== '' && value !== ALL_VALUE
)
