import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'
import { compose } from 'redux'
import injectReducer from '../../utils/injectReducer'
import { createStructuredSelector } from 'reselect'
import {
  selectModalDetailIsOpen,
  selectModalDetailId,
  selectModalDetailDataType,
  selectLoadingData,
  selectModalDetailData,
} from './selectors'
import { closeModalDetail, loadDataDetail } from './actions'
import reducer from './reducer'
import injectSaga from '../../utils/injectSaga'
import saga from './saga'
import messages from './messages'
import { DialogActions } from 'material-ui/Dialog'
import Grow from 'material-ui/transitions/Grow'
import { TableBody } from 'material-ui/Table'
import Button from 'material-ui/Button'
import CircularLoading from '../../components/CircularLoading'
import { CustomTableRow, CustomTableCell } from '../../components/Table/styles'
import {
  CustomDialog,
  CustomDialogContent,
  CustomDialogTitle,
  CustomTable,
  Img,
} from './styles'

class ModalDetail extends React.PureComponent {
  componentWillReceiveProps({ isOpen, entryId, dataType }) {
    if (!this.props.isOpen && isOpen &&
      entryId !== this.props.entryId || dataType !== this.props.dataType) {
      this.props.dispatchLoadDataDetail()
    }
  }

  handleCloseModal = () => {
    this.props.dispatchCloseModalDetail()
  }

  renderLoading = () => (
    <CircularLoading wrapperHeight={200} size={100} />
  )

  renderData = (data) => (
    <CustomTable>
      <TableBody>
        {_.map(data, (value, key) => (
          (key !== 'id') &&
          <CustomTableRow key={key}>
            <CustomTableCell bold dangerouslySetInnerHTML={{ __html: key }} />
            {
              _.includes(['image', 'thumb', ' logo'], key) ?
                <CustomTableCell>
                  <Img src={value} alt={key} />
                </CustomTableCell> :
                <CustomTableCell dangerouslySetInnerHTML={{ __html: value }} />
            }
          </CustomTableRow>
        ))}
      </TableBody>
    </CustomTable>
  )

  render() {
    const { isOpen, loadingData, data } = this.props
    return (
      <CustomDialog
        open={isOpen}
        modal={true}
        transition={Grow}
        onClose={this.handleCloseModal}
        onBackdropClick={this.handleCloseModal}
        disableEscapeKeyDown={false}
      >
        <CustomDialogTitle>
          Profile Data
        </CustomDialogTitle>
        <CustomDialogContent>
          {loadingData ? this.renderLoading() : data && this.renderData(data)}
        </CustomDialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseModal} variant="raised" color="default" autoFocus>
            Close
          </Button>
        </DialogActions>
      </CustomDialog>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isOpen: selectModalDetailIsOpen(),
  entryId: selectModalDetailId(),
  dataType: selectModalDetailDataType(),
  loadingData: selectLoadingData(),
  data: selectModalDetailData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchCloseModalDetail: () => {
    dispatch(closeModalDetail())
  },
  dispatchLoadDataDetail: () => {
    dispatch(loadDataDetail())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'modalDetail', reducer })
const withSaga = injectSaga({ key: 'modalDetail', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ModalDetail)
