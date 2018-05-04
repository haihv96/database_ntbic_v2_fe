import { createSelector } from 'reselect'

const queryAPIState = state => state.getIn(['formSearchInput', 'queryAPI'])

const queryAPIValue = () => createSelector(
  queryAPIState,
  state => state.get('value')
)

export {
  queryAPIValue,
}
