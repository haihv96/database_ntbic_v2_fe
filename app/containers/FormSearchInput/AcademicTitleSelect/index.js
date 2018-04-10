import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import { selectLoading, selectAcademicTitlesData, selectAcademicTitleValue } from './selectors'
import { changeAcademicTitle } from './actions'
import reducer from './reducer'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../../SearchInput/styles'

class AcademicTitleSelect extends React.PureComponent {
  handleChangeAcademicTitle = e => {
    this.props.dispatchChangeAcademicTitle(e.target.value)
  }

  render() {
    const { value } = this.props
    return (
      <MaterialSelect value={value} onChange={this.handleChangeAcademicTitle}>
        <MenuItem value="all">
          <em><FormattedMessage {...messages.default} /></em>
        </MenuItem>
      </MaterialSelect>
    )
  }
}

AcademicTitleSelect.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  value: selectAcademicTitleValue(),
  loading: selectLoading(),
  data: selectAcademicTitlesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeAcademicTitle: value => {
    dispatch(changeAcademicTitle(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'FormSearchInput/AcademicTitleSelect', reducer })

export default compose(
  withReducer,
  withConnect,
)(AcademicTitleSelect)
