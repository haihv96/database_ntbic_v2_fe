import {
  OPEN_MODAL_DETAIL,
  CLOSE_MODAL_DETAIL,
  LOAD_DATA_DETAIL,
  LOAD_DATA_DETAIL_SUCCESS,
} from './constants'

export const openModalDetail = (id, dataType) => ({
  type: OPEN_MODAL_DETAIL,
  id,
  dataType,
})

export const loadDataDetail = data => ({
  type: LOAD_DATA_DETAIL,
  data,
})


export const dataDetailLoaded = data => ({
  type: LOAD_DATA_DETAIL_SUCCESS,
  data,
})

export const closeModalDetail = () => ({
  type: CLOSE_MODAL_DETAIL,
})
