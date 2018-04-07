import { createSelector } from 'reselect'

const pieChartState = state => state.get('pieChart')

const selectPieChartLoading = () => createSelector(
  pieChartState,
  state => state.get('loading')
)

const selectPieChartData = () => createSelector(
  pieChartState,
  state => state.get('data').toJS()
)

export {
  selectPieChartLoading,
  selectPieChartData,
}
