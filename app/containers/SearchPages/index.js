import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import QueryString from 'querystring'
import SearchAll from './SearchAll'
import { ALL_VALUE } from '../../globals/constants'
import { Main } from '../../globals/components'
import FormSearchInput from '../FormSearchInput'
import { changeQuery } from '../FormSearchInput/QueryInput/actions'
import { changeDataType } from '../FormSearchInput/DataTypeSelect/actions'
import { selectDataType } from '../FormSearchInput/DataTypeSelect/selectors'
import { changeAcademicTitle } from '../FormSearchInput/AcademicTitleSelect/actions'
import { changeBaseTechnologyCategory } from '../FormSearchInput/BaseTechnologyCategorySelect/actions'
import { changePatentType } from '../FormSearchInput/PatentTypeSelect/actions'
import { changeProvince } from '../FormSearchInput/ProvinceSelect/actions'
import { changeTechnologyCategory } from '../FormSearchInput/TechnologyCategorySelect/actions'
import { changeSpecialization } from '../FormSearchInput/SpecializationSelect/actions'

const settingSearchPage = dataType => {
  switch (dataType) {
    case ALL_VALUE:
      return <SearchAll />
    default:
      return <SearchAll />
  }
}

class SearchPages extends React.PureComponent {
  componentWillMount() {
    const {
      dispatchChangeAcademicTitle,
      dispatchChangeBaseTechnologyCategory,
      dispatchChangeDataType,
      dispatchChangePatentType,
      dispatchChangeProvince,
      dispatchChangeSpecialization,
      dispatchChangeQuery,
      dispatchChangeTechnologyCategory,
    } = this.props
    const {
      query, academic_title_id, province_id, data_type, base_technology_category_id,
      patent_type_id, specialization_id, technology_category_id,
    } = QueryString.parse(_.replace(this.props.location.search, '?', ''))
    if (query) dispatchChangeQuery(query)
    if (academic_title_id) dispatchChangeAcademicTitle(academic_title_id)
    if (province_id) dispatchChangeProvince(province_id)
    if (data_type) dispatchChangeDataType(data_type)
    if (patent_type_id) dispatchChangePatentType(patent_type_id)
    if (specialization_id) dispatchChangeSpecialization(specialization_id)
    if (technology_category_id) dispatchChangeTechnologyCategory(technology_category_id)
    if (base_technology_category_id) dispatchChangeBaseTechnologyCategory(base_technology_category_id)
  }

  render() {
    return (
      <Main>
        <FormSearchInput />
        {settingSearchPage(this.props.dataType)}
      </Main>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  dataType: selectDataType(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeAcademicTitle: value => {
    dispatch(changeAcademicTitle(value))
  },
  dispatchChangeBaseTechnologyCategory: value => {
    dispatch(changeBaseTechnologyCategory(value))
  },
  dispatchChangeDataType: value => {
    dispatch(changeDataType(value))
  },
  dispatchChangePatentType: value => {
    dispatch(changePatentType(value))
  },
  dispatchChangeProvince: value => {
    dispatch(changeProvince(value))
  },
  dispatchChangeSpecialization: value => {
    dispatch(changeSpecialization(value))
  },
  dispatchChangeQuery: value => {
    dispatch(changeQuery(value))
  },
  dispatchChangeTechnologyCategory: value => {
    dispatch(changeTechnologyCategory(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect,
  withRouter,
)(SearchPages)
