import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import { selectLoading, selectBaseTechnologyCategoriesData, selectBaseTechnologyCategoryValue } from './selectors'
import { changeBaseTechnologyCategory } from './actions'
import reducer from './reducer'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../../SearchInput/styles'

class BaseTechnologyCategorySelect extends React.PureComponent {
  handleChangeBaseTechnologyCategory = e => {
    this.props.dispatchChangeBaseTechnologyCategory(e.target.value)
  }

  render() {
    const { value } = this.props
    return (
      <MaterialSelect value={value} onChange={this.handleChangeBaseTechnologyCategory}>
        <MenuItem value="all">
          <em><FormattedMessage {...messages.default} /></em>
        </MenuItem>
      </MaterialSelect>
    )
  }
}

BaseTechnologyCategorySelect.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  value: selectBaseTechnologyCategoryValue(),
  loading: selectLoading(),
  data: selectBaseTechnologyCategoriesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeBaseTechnologyCategory: value => {
    dispatch(changeBaseTechnologyCategory(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'FormSearchInput/BaseTechnologyCategorySelect', reducer })

export default compose(
  withReducer,
  withConnect,
)(BaseTechnologyCategorySelect)
