import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { Chart } from 'react-google-charts'
import _ from 'lodash'
import injectSaga from '../../utils/injectSaga'
import injectReducer from '../../utils/injectReducer'
import { loadAnalysis } from './actions'
import { selectPieChartLoading, selectPieChartData } from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { Wrapper, PieChartList, PieChartItem, WrapperPieChart } from './styles'
import CateTitle from '../../components/CateTitle'
import CircularLoading from '../../components/CircularLoading'

const options = (title = '') => {
  return {
    legend: 'right',
    title,
    chartArea: {
      width: '80%',
      height: '80%',
    },
    is3D: true,
  }
}

class PieChart extends React.PureComponent {
  state = { data: this.props.data }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.dispatchLoadAnalysis()
  }

  componentWillReceiveProps({ data, intl }) {
    if (!_.isEqual(this.props.data, data) && data) {
      this.setState({
        data: _.mapValues(data, (values, typeAnalysis) => ({
            chart: _.concat(
              [['task', typeAnalysis]],
              _.map(values, value => (
                _.map(value, numberOfCategory => numberOfCategory)
              ))
            ),
            total: _.sumBy(values, value => value.count),
          })
        ),
      })
    }
  }

  getTitleChart = (messageType, total) => (
    `${this.props.intl.formatMessage(messages[messageType])} : ${total}`
  )

  renderLoading = () => (
    <CircularLoading size={100} wrapperHeight={400} />
  )

  renderPieChart = () => {
    const { data } = this.state
    return (
      <WrapperPieChart>
        <PieChartList>
          <PieChartItem className="col-md-4">
            <Chart
              chartType="PieChart"
              data={data.profiles.chart}
              options={options(this.getTitleChart('profiles', data.profiles.total))}
            />
          </PieChartItem>
          <PieChartItem className="col-md-4">
            <Chart
              chartType="PieChart"
              data={data.patents.chart}
              options={options(this.getTitleChart('patents', data.patents.total))}
            />
          </PieChartItem>
        </PieChartList>
        <PieChartList>
          <PieChartItem className="col-md-4">
            <Chart
              chartType="PieChart"
              data={data.companies.chart}
              options={options(this.getTitleChart('companies', data.companies.total))}
            />
          </PieChartItem>
          <PieChartItem className="col-md-4">
            <Chart
              chartType="PieChart"
              data={data.projects.chart}
              options={options(this.getTitleChart('projects', data.projects.total))}
            />
          </PieChartItem>
          <PieChartItem className="col-lg-4">
            <Chart
              chartType="PieChart"
              data={data.products.chart}
              options={options(this.getTitleChart('products', data.products.total))}
            />
          </PieChartItem>
        </PieChartList>
      </WrapperPieChart>
    )
  }

  render() {
    const { data } = this.state
    const { loading } = this.props
    return (
      <Wrapper>
        <CateTitle title={<FormattedMessage {...messages.header} />} />
        {loading ? this.renderLoading() : (_.isEmpty(data) || this.renderPieChart())}
      </Wrapper>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectPieChartLoading(),
  data: selectPieChartData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchLoadAnalysis: () => {
    dispatch(loadAnalysis())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'pieChart', reducer })
const withSaga = injectSaga({ key: 'pieChart', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(PieChart)
