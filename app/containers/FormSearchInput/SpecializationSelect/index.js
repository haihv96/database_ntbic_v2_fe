import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import { selectLoading, selectSpecializationsData, selectSpecializationValue } from './selectors'
import { changeSpecialization } from './actions'
import reducer from './reducer'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../../SearchInput/styles'

class SpecializationSelect extends React.PureComponent {
  handleChangeSpecialization = e => {
    this.props.dispatchChangeSpecialization(e.target.value)
  }

  render() {
    const { value } = this.props
    return (
      <MaterialSelect value={value} onChange={this.handleChangeSpecialization}>
        <MenuItem value="all">
          <em><FormattedMessage {...messages.default} /></em>
        </MenuItem>
      </MaterialSelect>
    )
  }
}

SpecializationSelect.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  value: selectSpecializationValue(),
  loading: selectLoading(),
  data: selectSpecializationsData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeSpecialization: value => {
    dispatch(changeSpecialization(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'FormSearchInput/SpecializationSelect', reducer })

export default compose(
  withReducer,
  withConnect,
)(SpecializationSelect)
