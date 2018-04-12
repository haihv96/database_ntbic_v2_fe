import React from 'react'
import { FormattedMessage } from 'react-intl'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import messages from './messages'
import { connect } from 'react-redux'
import _ from 'lodash'
import { createStructuredSelector } from 'reselect'
import {
  Wrapper,
  MaterialButton,
} from './styles'
import SearchIcon from 'react-icons/lib/md/search'
import DataTypeSelect from './DataTypeSelect'
import { selectDataType } from './DataTypeSelect/selectors'
import QueryInput from './QueryInput'
import { selectQuery } from './QueryInput/selectors'
import ProvinceSelect from './ProvinceSelect'
import { selectProvinceValue } from './ProvinceSelect/selectors'
import AcademicTitleSelect from './AcademicTitleSelect'
import { selectAcademicTitleValue } from './AcademicTitleSelect/selectors'
import BaseTechnologyCategorySelect from './BaseTechnologyCategorySelect'
import { selectBaseTechnologyCategoryValue } from './BaseTechnologyCategorySelect/selectors'
import TechnologyCategorySelect from './TechnologyCategorySelect'
import { selectTechnologyCategoryValue } from './TechnologyCategorySelect/selectors'
import SpecializationSelect from './SpecializationSelect'
import { selectSpecializationValue } from './SpecializationSelect/selectors'
import PatentTypeSelect from './PatentTypeSelect'
import { selectPatentTypeValue } from './PatentTypeSelect/selectors'
import { checkInputHasValue } from '../../globals/utils'

export class SearchInput extends React.PureComponent {
  handleOnSubmit = () => {
    const {
      dataType,
      technologyCategoryValue,
      provinceValue,
      academicTitleValue,
      baseTechnologyCategoryValue,
      query,
      specializationValue,
      patentTypeValue,
      history,
    } = this.props
    const queryInput = checkInputHasValue(query) ? `&query=${query}` : ''
    const techCateQuery = checkInputHasValue(technologyCategoryValue) ?
      `&technology_category_id=${technologyCategoryValue}` : ''
    const provinceQuery = checkInputHasValue(provinceValue) ?
      `&province_id=${provinceValue}` : ''
    const academicTitleQuery = checkInputHasValue(academicTitleValue) ?
      `&academic_title_id=${academicTitleValue}` : ''
    const baseTechCateQuery = checkInputHasValue(baseTechnologyCategoryValue) ?
      `&base_technology_category_id=${baseTechnologyCategoryValue}` : ''
    const specializationQuery = checkInputHasValue(specializationValue) ?
      `&specialization_id=${specializationValue}` : ''
    const patentTypeQuery = checkInputHasValue(patentTypeValue) ?
      `&patent_type_id=${patentTypeValue}` : ''
    const searchQuery = queryInput + techCateQuery + provinceQuery +
      academicTitleQuery + baseTechCateQuery + specializationQuery + patentTypeQuery

    history.push(`/search/?data_type=${dataType}${searchQuery}`)
  }

  render() {
    const { dataType, technologyCategoryValue } = this.props
    return (
      <Wrapper>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <QueryInput />
            <DataTypeSelect />
            <MaterialButton type="submit" variant="raised" color="primary">
              <SearchIcon size={20} /><FormattedMessage {...messages.search} />
            </MaterialButton>
          </div>
          {_.includes(['profiles', 'projects', 'companies'], dataType) && <ProvinceSelect />}
          {_.includes(['profiles'], dataType) && <AcademicTitleSelect />}
          {_.includes(['patents', 'companies', 'products'], dataType) && <BaseTechnologyCategorySelect />}
          {_.includes(['projects'], dataType) && <TechnologyCategorySelect />}
          {checkInputHasValue(technologyCategoryValue) && <SpecializationSelect />}
          {_.includes(['patents'], dataType) && <PatentTypeSelect />}
        </form>
      </Wrapper>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  dataType: selectDataType(),
  technologyCategoryValue: selectTechnologyCategoryValue(),
  provinceValue: selectProvinceValue(),
  academicTitleValue: selectAcademicTitleValue(),
  baseTechnologyCategoryValue: selectBaseTechnologyCategoryValue(),
  query: selectQuery(),
  specializationValue: selectSpecializationValue(),
  patentTypeValue: selectPatentTypeValue(),
})

export default compose(
  connect(mapStateToProps),
  withRouter,
)(SearchInput)
