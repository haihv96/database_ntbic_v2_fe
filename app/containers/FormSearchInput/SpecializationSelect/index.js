import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from '../../../utils/injectSaga'
import {
  selectLoading,
  selectSpecializationsData,
  selectSpecializationValue,
} from './selectors'
import { selectTechnologyCategoryValue } from '../TechnologyCategorySelect/selectors'
import {
  changeSpecialization,
  loadSpecializations,
  resetSpecializationValue,
} from './actions'
import saga from './saga'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../styles'
import CircularLoading from '../../../components/CircularLoading'
import { ALL_VALUE } from '../../../globals/constants'
import { checkInputHasValue } from '../../../globals/utils'

class SpecializationSelect extends React.PureComponent {
  componentWillMount() {
    this.props.dispatchLoadSpecializations()
  }

  componentWillReceiveProps({ technologyCategoryValue }) {
    if (checkInputHasValue(technologyCategoryValue) &&
      technologyCategoryValue !== this.props.technologyCategoryValue
    ) {
      this.props.dispatchResetSpecializationValue()
      this.props.dispatchLoadSpecializations()
    }
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
      <MenuItem value={ALL_VALUE}>
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  value: selectSpecializationValue(),
  loading: selectLoading(),
  data: selectSpecializationsData(),
  technologyCategoryValue: selectTechnologyCategoryValue(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeSpecialization: value => {
    dispatch(changeSpecialization(value))
  },
  dispatchLoadSpecializations: () => {
    dispatch(loadSpecializations())
  },
  dispatchResetSpecializationValue: () => {
    dispatch(resetSpecializationValue())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({ key: 'formSearchInput/specializationSelect', saga })

export default compose(
  withSaga,
  withConnect,
)(SpecializationSelect)
