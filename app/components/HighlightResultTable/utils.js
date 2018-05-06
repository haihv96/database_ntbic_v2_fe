import _ from 'lodash'

export const calFieldValue = (fieldValue) => (
  _.isArray(fieldValue) ? _.map(fieldValue).join('...') : fieldValue
)
