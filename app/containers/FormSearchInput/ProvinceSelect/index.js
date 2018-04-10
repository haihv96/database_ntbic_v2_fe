import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import { selectLoading, selectProvincesData, selectProvinceValue } from './selectors'
import { changeProvince } from './actions'
import reducer from './reducer'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../../SearchInput/styles'

class ProvinceSelect extends React.PureComponent {
  handleChangeProvince = e => {
    this.props.dispatchChangeProvince(e.target.value)
  }

  render() {
    const { value } = this.props
    return (
      <MaterialSelect value={value} onChange={this.handleChangeProvince}>
        <MenuItem value="all">
          <em><FormattedMessage {...messages.default} /></em>
        </MenuItem>
      </MaterialSelect>
    )
  }
}

ProvinceSelect.propTypes = {
  value: PropTypes.string.isRequired,
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
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'FormSearchInput/ProvinceSelect', reducer })

export default compose(
  withReducer,
  withConnect,
)(ProvinceSelect)
