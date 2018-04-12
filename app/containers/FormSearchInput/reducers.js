import { combineReducers } from 'redux-immutable'
import AcademicTitleSelectReducer from './AcademicTitleSelect/reducer'
import BaseTechnologyCategorySelectReducer from './BaseTechnologyCategorySelect/reducer'
import DataTypeSelectReducer from './DataTypeSelect/reducer'
import PatentTypeSelectReducer from './PatentTypeSelect/reducer'
import ProvinceSelectReducer from './ProvinceSelect/reducer'
import QueryInputReducer from './QueryInput/reducer'
import SpecializationSelectReducer from './SpecializationSelect/reducer'
import TechnologyCategorySelectReducer from './TechnologyCategorySelect/reducer'

export default combineReducers({
  academicTitle: AcademicTitleSelectReducer,
  baseTechnologyCategory: BaseTechnologyCategorySelectReducer,
  dataType: DataTypeSelectReducer,
  patentType: PatentTypeSelectReducer,
  province: ProvinceSelectReducer,
  queryInput: QueryInputReducer,
  specialization: SpecializationSelectReducer,
  technologyCategory: TechnologyCategorySelectReducer,
})
