import {
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
} from './constants'

export const loadProjects = () => {
  return {
    type: LOAD_PROJECTS,
  }
}

export const projectsLoaded = data => {
  return {
    type: LOAD_PROJECTS_SUCCESS,
    data,
  }
}
