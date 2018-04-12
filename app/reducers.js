import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import languageProviderReducer from 'containers/LanguageProvider/reducer'
import { reducer as formReducer } from 'redux-form/immutable'
import formSearchInput from 'containers/FormSearchInput/reducers'

const routeInitialState = fromJS({
  location: null,
})

const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      })
    default:
      return state
  }
}


const createReducer = injectedReducers => {
  return combineReducers({
    route: routeReducer,
    form: formReducer,
    language: languageProviderReducer,
    formSearchInput: formSearchInput,
    ...injectedReducers,
  })
}

export default createReducer
