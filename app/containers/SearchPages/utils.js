import { checkInputHasValue } from '../../globals/utils'
import querystring from 'query-string'

const calQueryAPI = (attrs = {}) => {
  const {
    data_type, query, technology_category_id, province_id, academic_title_id,
    base_technology_category_id, specialization_id, patent_type_id, page,
  } = attrs
  const queryInput = checkInputHasValue(query) ? `&query=${query}` : ''
  const techCateQuery = checkInputHasValue(technology_category_id) ?
    `&technology_category_id=${technology_category_id}` : ''
  const provinceQuery = checkInputHasValue(province_id) ?
    `&province_id=${province_id}` : ''
  const academicTitleQuery = checkInputHasValue(academic_title_id) ?
    `&academic_title_id=${academic_title_id}` : ''
  const baseTechCateQuery = checkInputHasValue(base_technology_category_id) ?
    `&base_technology_category_id=${base_technology_category_id}` : ''
  const specializationQuery = checkInputHasValue(specialization_id) ?
    `&specialization_id=${specialization_id}` : ''
  const patentTypeQuery = checkInputHasValue(patent_type_id) ?
    `&patent_type_id=${patent_type_id}` : ''
  const paginationQuery = checkInputHasValue(page) ?
    `&page=${page}` : ''
  const combineQuery = queryInput + techCateQuery + provinceQuery +
    academicTitleQuery + baseTechCateQuery + specializationQuery +
    patentTypeQuery + paginationQuery

  return `/${data_type}?${combineQuery}`
}

export { calQueryAPI }
