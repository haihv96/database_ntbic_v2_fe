import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'
import _ from 'lodash'
import messages from './messages'
import injectSaga from '../../../utils/injectSaga'
import injectReducer from '../../../utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import { Wrapper, AminateFadeInWrapper, WapperLoading } from './styles'
import {
  selectPatentsLoading,
  selectPatentsData,
} from './selectors'
import { loadPatents } from './actions'
import { changePaginationParam } from '../../FormSearchInput/PaginationParam/actions'
import SearchResultCate from '../../../components/SearchResultCate'
import PatentsTable from '../../../components/PatentsTable'
import CircularLoading from '../../../components/CircularLoading'
import TablePagination from '../../../components/TablePagination'

export class SearchPatents extends React.PureComponent {
  componentWillMount() {
    this.loadPatentsData()
  }

  componentWillReceiveProps({ searchQuery }) {
    if (this.props.searchQuery !== searchQuery) {
      this.loadPatentsData()
    }
  }

  loadPatentsData = () => {
    const { dispatchLoadPatents } = this.props
    dispatchLoadPatents()
  }

  renderLoading = () => (
    <WapperLoading>
      <CircularLoading haveBackground size={200} />
    </WapperLoading>
  )

  renderPatents = patentsData => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.patents)}
        results={10}
        time={0.3824782342}
      />
      <PatentsTable data={patentsData.data} />
      <TablePagination total={patentsData.pages} />
    </AminateFadeInWrapper>
  )

  render() {
    const { patentsLoading, patentsData } = this.props
    return (
      <Wrapper>
        {patentsLoading && this.renderLoading()}
        {_.isEmpty(patentsData) || this.renderPatents(patentsData)}
      </Wrapper>
    )
  }
}

SearchPatents.propTypes = {}

const mapStateToProps = createStructuredSelector({
  patentsLoading: selectPatentsLoading(),
  patentsData: selectPatentsData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchLoadPatents: () => {
    dispatch(loadPatents())
  },
  dispatchChangePaginationParam: value => {
    dispatch(changePaginationParam(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'searchPatents', reducer })
const withSaga = injectSaga({ key: 'searchPatents', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SearchPatents)
