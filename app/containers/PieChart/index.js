import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import makeSelectPieChart from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { Chart } from 'react-google-charts'

import {
  Wrapper,
  PieChartList,
  PieChartItem,
} from './styles'
import CateTitle from '../../components/CateTitle'

const data = {
  'profiles': {
    data: [
      ['Task', 'Hours per Day'],
      ['Tiến sĩ', 6213],
      ['Thạc sĩ', 3945],
      ['Kỹ sư', 2235],
      ['Cử nhân', 1568],
      ['Khác', 9568]
    ],
    options: {
      legend: 'right',
      title: 'Chuyên gia: ' + 23529,
      is3D: true,
      chartArea: {
        width: '90%',
        height: '90%',
      },
    },
  },
  'projects': [],
  'products': [],
  'patents': [],
  'companies': [],
}

class PieChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <CateTitle title={<FormattedMessage {...messages.header} />} />
        <PieChartList>
          <PieChartItem>
            <Chart
              chartType="PieChart"
              data={data.profiles.data}
              options={data.profiles.options}
            />
          </PieChartItem>
          <PieChartItem>
            <Chart
              chartType="PieChart"
              data={data.profiles.data}
              options={data.profiles.options}
            />
          </PieChartItem>
          <PieChartItem>
            <Chart
              chartType="PieChart"
              data={data.profiles.data}
              options={data.profiles.options}
            />
          </PieChartItem>
        </PieChartList>
        <PieChartList>
          <PieChartItem>
            <Chart
              chartType="PieChart"
              data={data.profiles.data}
              options={data.profiles.options}
            />
          </PieChartItem>
          <PieChartItem>
            <Chart
              chartType="PieChart"
              data={data.profiles.data}
              options={data.profiles.options}
            />
          </PieChartItem>
        </PieChartList>
      </Wrapper>
    )
  }
}

// PieChart.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// }
//
// const mapStateToProps = createStructuredSelector({
//   piechart: makeSelectPieChart(),
// })
//
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   }
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps)
//
// const withReducer = injectReducer({key: 'pieChart', reducer})
// const withSaga = injectSaga({key: 'pieChart', saga})

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(PieChart)

export default PieChart

