import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectReducer from '../../../utils/injectReducer'
import injectSaga from '../../../utils/injectSaga'
import { selectLoading, selectSpecializationsData, selectSpecializationValue } from './selectors'
import { changeSpecialization, loadSpecializations } from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../../SearchInput/styles'
import CircularLoading from '../../../components/CircularLoading'

class SpecializationSelect extends React.PureComponent {
  componentWillMount() {
    // this.props.dispatchLoadSpecializations()
  }

  handleChangeSpecialization = e => {
    this.props.dispatchChangeSpecialization(e.target.value)
  }

  renderLoading = () => (
    <MaterialSelect disabled value="loading">
      <MenuItem value="loading">
        <CircularLoading wrapperHeight={27} wrapperWidth={100} size={27} />
      </MenuItem>
    </MaterialSelect>
  )

  renderSelectField = (data, value) => (
    <MaterialSelect value={value} onChange={this.handleChangeSpecialization}>
      <MenuItem value="all">
        <em><FormattedMessage {...messages.default} /></em>
      </MenuItem>
      {
        _.map(data, specialization => (
          <MenuItem key={specialization.id} value={specialization.id}>
            {specialization.name}
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
  dispatchLoadSpecializations: () => {
    dispatch(loadSpecializations())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'FormSearchInput/SpecializationSelect', reducer })
const withSaga = injectSaga({ key: 'FormSearchInput/SpecializationSelect', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SpecializationSelect)
