import { fromJS } from 'immutable'
import {
  CHANGE_QUERY_API,
} from './constants'
import { combineReducers } from 'redux-immutable'
import AcademicTitleSelectReducer from './AcademicTitleSelect/reducer'
import BaseTechnologyCategorySelectReducer from './BaseTechnologyCategorySelect/reducer'
import DataTypeSelectReducer from './DataTypeSelect/reducer'
import PatentTypeSelectReducer from './PatentTypeSelect/reducer'
import ProvinceSelectReducer from './ProvinceSelect/reducer'
import QueryInputReducer from './QueryInput/reducer'
import SpecializationSelectReducer from './SpecializationSelect/reducer'
import TechnologyCategorySelectReducer from './TechnologyCategorySelect/reducer'
import PaginationParamReducer from './PaginationParam/reducer'

const initialState = fromJS({ value: null })

const QueryAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QUERY_API:
      return state.set('value', action.value)
    default:
      return state
  }
}

export default combineReducers({
  academicTitle: AcademicTitleSelectReducer,
  baseTechnologyCategory: BaseTechnologyCategorySelectReducer,
  dataType: DataTypeSelectReducer,
  patentType: PatentTypeSelectReducer,
  province: ProvinceSelectReducer,
  queryInput: QueryInputReducer,
  specialization: SpecializationSelectReducer,
  technologyCategory: TechnologyCategorySelectReducer,
  paginationParam: PaginationParamReducer,
  queryAPI: QueryAPIReducer,
})
