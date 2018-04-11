import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import injectSaga from '../../../utils/injectSaga'
import { selectLoading, selectPatentTypesData, selectPatentTypeValue } from './selectors'
import { changePatentType, loadPatentTypes } from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../../SearchInput/styles'
import CircularLoading from '../../../components/CircularLoading'

class PatentTypeSelect extends React.PureComponent {
  componentWillMount() {
    this.props.dispatchLoadPatentTypes()
  }

  handleChangePatentType = e => {
    this.props.dispatchChangePatentType(e.target.value)
  }

  renderLoading = () => (
    <MaterialSelect disabled value="loading">
      <MenuItem value="loading">
        <CircularLoading wrapperHeight={27} wrapperWidth={100} size={27} />
      </MenuItem>
    </MaterialSelect>
  )

  renderSelectField = (data, value) => (
    <MaterialSelect value={value} onChange={this.handleChangePatentType}>
      <MenuItem value="all">
        <em><FormattedMessage {...messages.default} /></em>
      </MenuItem>
      {
        _.map(data, patentType => (
          <MenuItem key={patentType.id} value={patentType.id}>
            {patentType.name}
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
  dispatchLoadPatentTypes: () => {
    dispatch(loadPatentTypes())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'FormSearchInput/PatentTypeSelect', reducer })
const withSaga = injectSaga({ key: 'FormSearchInput/PatentTypeSelect', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PatentTypeSelect)
