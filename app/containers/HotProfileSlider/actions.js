import {
  LOAD_HOT_PROFILES,
  LOAD_HOT_PROFILES_SUCCESS,
  LOAD_HOT_PROFILES_ERROR,
} from './constants'

export const loadHotProfiles = () => ({
  type: LOAD_HOT_PROFILES,
})

export const hotProfilesLoaded = data => ({
  type: LOAD_HOT_PROFILES_SUCCESS,
  data,
})

export const hotProfilesLoadingError = error => ({
  type: LOAD_HOT_PROFILES_ERROR,
  error,
})
