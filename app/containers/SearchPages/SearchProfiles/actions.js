import {
  LOAD_PROFILES,
  LOAD_PROFILES_SUCCESS,
} from './constants'

export const loadProfiles = () => {
  return {
    type: LOAD_PROFILES,
  }
}

export const profilesLoaded = data => {
  return {
    type: LOAD_PROFILES_SUCCESS,
    data,
  }
}
