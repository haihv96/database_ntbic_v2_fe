import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { selectDataType } from './selectors'
import { changeDataType } from './actions'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../styles'
import { resetValue } from '../actions'
import { ALL_VALUE } from '../../../globals/constants'

class DataTypeSelect extends React.PureComponent {
  handleChangeDataType = e => {
    this.props.dispatchChangeDataType(e.target.value)
  }

  componentWillReceiveProps({ dataType }) {
    if (this.props.dataType !== dataType) {
      this.props.dispatchResetFormValue()
    }
  }

  render() {
    const { dataType } = this.props
    return (
      <MaterialSelect value={dataType} onChange={this.handleChangeDataType}>
        <MenuItem value={ALL_VALUE}>
          <em><FormattedMessage {...messages.allDataType} /></em>
        </MenuItem>
        <MenuItem value="profiles"><FormattedMessage {...messages.profiles} /></MenuItem>
        <MenuItem value="projects"><FormattedMessage {...messages.projects} /></MenuItem>
        <MenuItem value="patents"><FormattedMessage {...messages.patents} /></MenuItem>
        <MenuItem value="products"><FormattedMessage {...messages.products} /></MenuItem>
        <MenuItem value="companies"><FormattedMessage {...messages.companies} /></MenuItem>
      </MaterialSelect>
    )
  }
}

DataTypeSelect.propTypes = {
  dataType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
}

const mapStateToProps = createStructuredSelector({
  dataType: selectDataType(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeDataType: value => {
    dispatch(changeDataType(value))
  },
  dispatchResetFormValue: () => {
    dispatch(resetValue())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect,
)(DataTypeSelect)
