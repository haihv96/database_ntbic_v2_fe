import { checkInputHasValue } from '../../globals/utils'
import { select } from 'redux-saga/effects'
import { selectQuery } from '../FormSearchInput/QueryInput/selectors'
import { selectAcademicTitleValue } from '../FormSearchInput/AcademicTitleSelect/selectors'
import { selectProvinceValue } from '../FormSearchInput/ProvinceSelect/selectors'
import { selectPatentTypeValue } from '../FormSearchInput/PatentTypeSelect/selectors'
import { selectSpecializationValue } from '../FormSearchInput/SpecializationSelect/selectors'
import { selectBaseTechnologyCategoryValue } from '../FormSearchInput/BaseTechnologyCategorySelect/selectors'
import { selectTechnologyCategoryValue } from '../FormSearchInput/TechnologyCategorySelect/selectors'
import { selectDataType } from '../FormSearchInput/DataTypeSelect/selectors'

const calQuery = (attrs = {}) => {
  const {
    dataType, query, technologyCategoryValue, provinceValue, academicTitleValue,
    baseTechnologyCategoryValue, specializationValue, patentTypeValue,
  } = attrs
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
  const combineQuery = queryInput + techCateQuery + provinceQuery +
    academicTitleQuery + baseTechCateQuery + specializationQuery + patentTypeQuery
  return `/${dataType}?${combineQuery}`
}

function* compressPathSearchRequest() {
  const dataType = yield select(selectDataType())
  const query = yield select(selectQuery())
  const technologyCategoryValue = yield select(selectTechnologyCategoryValue())
  const provinceValue = yield select(selectProvinceValue())
  const academicTitleValue = yield select(selectAcademicTitleValue())
  const baseTechnologyCategoryValue = yield select(selectBaseTechnologyCategoryValue())
  const specializationValue = yield select(selectSpecializationValue())
  const patentTypeValue = yield select(selectPatentTypeValue())
  return calQuery({
    dataType, query, technologyCategoryValue, provinceValue, academicTitleValue,
    baseTechnologyCategoryValue, specializationValue, patentTypeValue,
  })
}

export { compressPathSearchRequest }
