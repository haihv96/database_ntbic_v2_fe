import { createSelector } from 'reselect';

const pieChartState = (state) => state.get('pieChart')

const makeSelectPieChart = () => createSelector(
  pieChartState,
  state => substate.toJS()
)

export default makeSelectPieChart
export {
}
