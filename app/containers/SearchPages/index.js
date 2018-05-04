import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import QueryString from 'querystring'
import SearchAll from './SearchAll'
import SearchProfiles from './SearchProfiles'
import SearchProjects from './SearchProjects'
import SearchPatents from './SearchPatents'
import SearchProducts from './SearchProducts'
import SearchCompanies from './SearchCompanies'
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
import { changePaginationParam, resetPaginationParam } from '../FormSearchInput/PaginationParam/actions'
import { changeQueryAPI } from '../FormSearchInput/actions'
import { calQueryAPI } from './utils'

const settingSearchPage = dataType => {
  switch (dataType) {
    case ALL_VALUE:
      return SearchAll
    case 'profiles':
      return SearchProfiles
    case 'projects':
      return SearchProjects
    case 'patents':
      return SearchPatents
    case 'products':
      return SearchProducts
    case 'companies':
      return SearchCompanies
    default:
      return SearchAll
  }
}

class SearchPages extends React.PureComponent {
  state = { dataType: this.props.dataType }

  componentWillMount() {
    this.extractQueryStringToState(this.props.location.search)
  }

  componentWillReceiveProps({ location: { search } }) {
    if (search !== this.props.location.search) {
      this.extractQueryStringToState(search)
    }
  }

  extractQueryStringToState = locationSearch => {
    const {
      dispatchChangeAcademicTitle,
      dispatchChangeBaseTechnologyCategory,
      dispatchChangeDataType,
      dispatchChangePatentType,
      dispatchChangeProvince,
      dispatchChangeSpecialization,
      dispatchChangeQuery,
      dispatchChangeTechnologyCategory,
      dispatchChangePaginationParam,
      dispatchChangeQueryAPI,
      dispatchResetPaginationParam,
    } = this.props
    const {
      query, academic_title_id, province_id, data_type, base_technology_category_id,
      patent_type_id, specialization_id, technology_category_id, page,
    } = QueryString.parse(_.replace(locationSearch, '?', ''))
    if (data_type) {
      dispatchChangeDataType(data_type)
      this.setState({ dataType: data_type })
    }
    if (query) dispatchChangeQuery(query)
    if (academic_title_id) dispatchChangeAcademicTitle(parseInt(academic_title_id, 10))
    if (province_id) dispatchChangeProvince(parseInt(province_id, 10))
    if (patent_type_id) dispatchChangePatentType(parseInt(patent_type_id, 10))
    if (specialization_id) dispatchChangeSpecialization(parseInt(specialization_id, 10))
    if (technology_category_id) dispatchChangeTechnologyCategory(parseInt(technology_category_id, 10))
    if (base_technology_category_id) dispatchChangeBaseTechnologyCategory(parseInt(base_technology_category_id, 10))
    if (page) {
      dispatchChangePaginationParam(parseInt(page, 10))
    } else {
      dispatchResetPaginationParam()
    }
    dispatchChangeQueryAPI(calQueryAPI({
      data_type, query, technology_category_id, province_id, academic_title_id,
      base_technology_category_id, specialization_id, patent_type_id, page,
    }))
  }

  render() {
    const { location: { search } } = this.props
    const { dataType } = this.state
    const PageSearch = settingSearchPage(dataType)
    return (
      <Main>
        <FormSearchInput />
        <PageSearch searchQuery={search} />
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
  dispatchChangePaginationParam: value => {
    dispatch(changePaginationParam(value))
  },
  dispatchChangeQueryAPI: value => {
    dispatch(changeQueryAPI(value))
  },
  dispatchResetPaginationParam: () => {
    dispatch(resetPaginationParam())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect,
  withRouter,
)(SearchPages)
