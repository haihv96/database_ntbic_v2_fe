import {
  LOAD_PROFILES,
  LOAD_PROFILES_SUCCESS,
  LOAD_COMPANIES,
  LOAD_COMPANIES_SUCCESS,
  LOAD_PATENTS,
  LOAD_PATENTS_SUCCESS,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PROJECTS,
  LOAD_PROJECTS_SUCCESS,
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

export const loadPatents = () => {
  return {
    type: LOAD_PATENTS,
  }
}

export const patentsLoaded = data => {
  return {
    type: LOAD_PATENTS_SUCCESS,
    data,
  }
}

export const loadProducts = () => {
  return {
    type: LOAD_PRODUCTS,
  }
}

export const productsLoaded = data => {
  return {
    type: LOAD_PRODUCTS_SUCCESS,
    data,
  }
}

export const loadCompanies = () => {
  return {
    type: LOAD_COMPANIES,
  }
}

export const companiesLoaded = data => {
  return {
    type: LOAD_COMPANIES_SUCCESS,
    data,
  }
}