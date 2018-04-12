import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from '../../../utils/injectSaga'
import { selectLoading, selectBaseTechnologyCategoriesData, selectBaseTechnologyCategoryValue } from './selectors'
import { changeBaseTechnologyCategory, loadBaseTechnologyCategories } from './actions'
import saga from './saga'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../styles'
import CircularLoading from '../../../components/CircularLoading'
import { ALL_VALUE } from '../../../globals/constants'

class BaseTechnologyCategorySelect extends React.PureComponent {
  componentWillMount() {
    this.props.dispatchLoadBaseTechnologyCategories()
  }

  handleChangeBaseTechnologyCategory = e => {
    this.props.dispatchChangeBaseTechnologyCategory(e.target.value)
  }

  renderLoading = () => (
    <MaterialSelect disabled value="loading">
      <MenuItem value="loading">
        <CircularLoading wrapperHeight={27} wrapperWidth={100} size={27} />
      </MenuItem>
    </MaterialSelect>
  )

  renderSelectField = (data, value) => (
    <MaterialSelect value={value} onChange={this.handleChangeBaseTechnologyCategory}>
      <MenuItem value={ALL_VALUE}>
        <em><FormattedMessage {...messages.default} /></em>
      </MenuItem>
      {
        _.map(data, baseTechnologyCategory => (
          <MenuItem key={baseTechnologyCategory.id} value={baseTechnologyCategory.id}>
            {baseTechnologyCategory.name}
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

BaseTechnologyCategorySelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
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
  dispatchLoadBaseTechnologyCategories: () => {
    dispatch(loadBaseTechnologyCategories())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({ key: 'formSearchInput/baseTechnologyCategorySelect', saga })

export default compose(
  withSaga,
  withConnect,
)(BaseTechnologyCategorySelect)
