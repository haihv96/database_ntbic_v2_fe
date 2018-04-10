import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import { selectLoading, selectTechnologyCategoriesData, selectTechnologyCategoryValue } from './selectors'
import { changeTechnologyCategory } from './actions'
import reducer from './reducer'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../../SearchInput/styles'

class TechnologyCategorySelect extends React.PureComponent {
  handleChangeTechnologyCategory = e => {
    this.props.dispatchChangeTechnologyCategory(e.target.value)
  }

  render() {
    const { value } = this.props
    return (
      <MaterialSelect value={value} onChange={this.handleChangeTechnologyCategory}>
        <MenuItem value="all">
          <em><FormattedMessage {...messages.default} /></em>
        </MenuItem>
      </MaterialSelect>
    )
  }
}

TechnologyCategorySelect.propTypes = {
  value: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  value: selectTechnologyCategoryValue(),
  loading: selectLoading(),
  data: selectTechnologyCategoriesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeTechnologyCategory: value => {
    dispatch(changeTechnologyCategory(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'FormSearchInput/TechnologyCategorySelect', reducer })

export default compose(
  withReducer,
  withConnect,
)(TechnologyCategorySelect)
