import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { selectQuery } from './selectors'
import { changeQuery } from './actions'
import messages from './messages'
import {
  MaterialInput,
} from '../styles'

export class QueryInput extends React.PureComponent {
  handleChangeQuery = e => {
    this.props.dispatchChangeQuery(e.target.value)
  }

  render() {
    const { intl } = this.props
    return (
      <MaterialInput
        onChange={this.handleChangeQuery}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    )
  }
}

QueryInput.propTypes = {
  query: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  query: selectQuery(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeQuery: value => {
    dispatch(changeQuery(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect,
  injectIntl,
)(QueryInput)
