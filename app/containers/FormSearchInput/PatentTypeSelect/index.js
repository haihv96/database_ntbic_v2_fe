import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import { selectLoading, selectPatentTypesData, selectPatentTypeValue } from './selectors'
import { changePatentType } from './actions'
import reducer from './reducer'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../../SearchInput/styles'

class PatentTypeSelect extends React.PureComponent {
  handleChangePatentType = e => {
    this.props.dispatchChangePatentType(e.target.value)
  }

  render() {
    const { value } = this.props
    return (
      <MaterialSelect value={value} onChange={this.handleChangePatentType}>
        <MenuItem value="all">
          <em><FormattedMessage {...messages.default} /></em>
        </MenuItem>
      </MaterialSelect>
    )
  }
}

PatentTypeSelect.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  value: selectPatentTypeValue(),
  loading: selectLoading(),
  data: selectPatentTypesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangePatentType: value => {
    dispatch(changePatentType(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'FormSearchInput/PatentTypeSelect', reducer })

export default compose(
  withReducer,
  withConnect,
)(PatentTypeSelect)
