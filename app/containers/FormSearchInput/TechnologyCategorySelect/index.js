import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from '../../../utils/injectSaga'
import { selectLoading, selectTechnologyCategoriesData, selectTechnologyCategoryValue } from './selectors'
import { changeTechnologyCategory, loadTechnologyCategories } from './actions'
import saga from './saga'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../styles'
import CircularLoading from '../../../components/CircularLoading'
import { ALL_VALUE } from '../../../globals/constants'

class TechnologyCategorySelect extends React.PureComponent {
  componentWillMount() {
    this.props.dispatchLoadTechnologyCategories()
  }

  handleChangeTechnologyCategory = e => {
    this.props.dispatchChangeTechnologyCategory(e.target.value)
  }

  renderLoading = () => (
    <MaterialSelect disabled value="loading">
      <MenuItem value="loading">
        <CircularLoading wrapperHeight={27} wrapperWidth={100} size={27} />
      </MenuItem>
    </MaterialSelect>
  )

  renderSelectField = (data, value) => (
    <MaterialSelect value={value} onChange={this.handleChangeTechnologyCategory}>
      <MenuItem value={ALL_VALUE}>
        <em><FormattedMessage {...messages.default} /></em>
      </MenuItem>
      {
        _.map(data, technologyCategory => (
          <MenuItem key={technologyCategory.id} value={technologyCategory.id}>
            {technologyCategory.name}
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

TechnologyCategorySelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
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
  dispatchLoadTechnologyCategories: () => {
    dispatch(loadTechnologyCategories())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({ key: 'FormSearchInput/TechnologyCategorySelect', saga })

export default compose(
  withSaga,
  withConnect,
)(TechnologyCategorySelect)
