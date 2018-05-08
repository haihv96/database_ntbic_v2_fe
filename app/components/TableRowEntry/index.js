import React from 'react'
import { CustomTableRow } from '../Table/styles'
import { connect } from 'react-redux'
import { openModalDetail } from '../../containers/ModalDetail/actions'

const TableRowEntry = ({ children, id, dataType, dispatchOpenModalDetail }) => (
  <CustomTableRow entry onClick={() => dispatchOpenModalDetail(id, dataType)}>
    {children}
  </CustomTableRow>
)

const mapDispatchToProps = dispatch => ({
  dispatchOpenModalDetail: (id, dataType) => {
    dispatch(openModalDetail(id, dataType))
  },
})

export default connect(null, mapDispatchToProps)(TableRowEntry)
