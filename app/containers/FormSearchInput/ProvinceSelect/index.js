import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from '../../../utils/injectSaga'
import { selectLoading, selectProvincesData, selectProvinceValue } from './selectors'
import { changeProvince, loadProvinces } from './actions'
import saga from './saga'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../styles'
import CircularLoading from '../../../components/CircularLoading'
import { ALL_VALUE } from '../../../globals/constants'

class ProvinceSelect extends React.PureComponent {
  componentWillMount() {
    this.props.dispatchLoadProvinces()
  }

  handleChangeProvince = e => {
    this.props.dispatchChangeProvince(e.target.value)
  }

  renderLoading = () => (
    <MaterialSelect disabled value="loading">
      <MenuItem value="loading">
        <CircularLoading wrapperHeight={27} wrapperWidth={100} size={27} />
      </MenuItem>
    </MaterialSelect>
  )

  renderSelectField = (data, value) => (
    <MaterialSelect value={value} onChange={this.handleChangeProvince}>
      <MenuItem value={ALL_VALUE}>
        <em><FormattedMessage {...messages.default} /></em>
      </MenuItem>
      {
        _.map(data, province => (
          <MenuItem key={province.id} value={province.id}>
            {province.name}
          </MenuItem>
        ))
      }
    </MaterialSelect>
  )

  render() {
    const { loading, data, value } = this.props
    return (
      loading ? this.renderLoading() : (
        data.length && this.renderSelectField(data, value) || null
      )
    )
  }
}

ProvinceSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  value: selectProvinceValue(),
  loading: selectLoading(),
  data: selectProvincesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeProvince: value => {
    dispatch(changeProvince(value))
  },
  dispatchLoadProvinces: () => {
    dispatch(loadProvinces())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({ key: 'formSearchInput/provinceSelect', saga })

export default compose(
  withSaga,
  withConnect,
)(ProvinceSelect)
