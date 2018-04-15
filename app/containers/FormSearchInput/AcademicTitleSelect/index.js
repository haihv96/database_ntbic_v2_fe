import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from '../../../utils/injectSaga'
import { selectLoading, selectAcademicTitlesData, selectAcademicTitleValue } from './selectors'
import { changeAcademicTitle, loadAcademicTitles } from './actions'
import saga from './saga'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { MaterialSelect } from '../styles'
import CircularLoading from '../../../components/CircularLoading'
import { ALL_VALUE } from '../../../globals/constants'

class AcademicTitleSelect extends React.PureComponent {
  componentWillMount() {
    this.props.dispatchLoadAcademicTitles()
  }

  handleChangeAcademicTitle = e => {
    this.props.dispatchChangeAcademicTitle(e.target.value)
  }

  renderLoading = () => (
    <MaterialSelect disabled value="loading">
      <MenuItem value="loading">
        <CircularLoading wrapperHeight={27} wrapperWidth={100} size={27} />
      </MenuItem>
    </MaterialSelect>
  )

  renderSelectField = (data, value) => (
    <MaterialSelect value={value} onChange={this.handleChangeAcademicTitle}>
      <MenuItem value={ALL_VALUE}>
        <em><FormattedMessage {...messages.default} /></em>
      </MenuItem>
      {
        _.map(data, academicTitle => (
          <MenuItem key={academicTitle.id} value={academicTitle.id}>
            {academicTitle.name}
          </MenuItem>
        ))
      }
    </MaterialSelect>
  )

  render() {
    const { loading, data, value } = this.props
    console.log(value);
    return (
      loading ? this.renderLoading() : (
        data.length && this.renderSelectField(data, value) || null
      )
    )
  }
}

AcademicTitleSelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  value: selectAcademicTitleValue(),
  loading: selectLoading(),
  data: selectAcademicTitlesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeAcademicTitle: value => {
    dispatch(changeAcademicTitle(value))
  },
  dispatchLoadAcademicTitles: () => {
    dispatch(loadAcademicTitles())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withSaga = injectSaga({ key: 'formSearchInput/academicTitleSelect', saga })

export default compose(
  withSaga,
  withConnect,
)(AcademicTitleSelect)
