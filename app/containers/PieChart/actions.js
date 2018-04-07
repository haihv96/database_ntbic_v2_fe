import {
  LOAD_ANALYSIS,
  LOAD_ANALYSIS_SUCCESS,
  LOAD_ANALYSIS_ERROR,
} from './constants'

export const loadAnalysis = () => ({
  type: LOAD_ANALYSIS,
})

export const analysisLoaded = data => ({
  type: LOAD_ANALYSIS_SUCCESS,
  data,
})

export const analysisLoadingError = err => ({
  type: LOAD_ANALYSIS_ERROR,
  err,
})
