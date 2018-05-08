import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'
import _ from 'lodash'
import { animateScroll } from 'react-scroll'
import messages from './messages'
import injectSaga from '../../../utils/injectSaga'
import injectReducer from '../../../utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import { Wrapper, AminateFadeInWrapper, WapperLoading } from './styles'
import {
  selectCompaniesLoading,
  selectCompaniesData,
} from './selectors'
import { loadCompanies } from './actions'
import { changePaginationParam } from '../../FormSearchInput/PaginationParam/actions'
import SearchResultCate from '../../../components/SearchResultCate'
import CompaniesTable from '../../../components/CompaniesTable'
import CircularLoading from '../../../components/CircularLoading'
import TablePagination from '../../../components/TablePagination'

export class SearchCompanies extends React.PureComponent {
  componentWillMount() {
    this.loadCompaniesData()
  }

  componentWillReceiveProps({ searchQuery }) {
    if (this.props.searchQuery !== searchQuery) {
      this.loadCompaniesData()
    }
  }

  loadCompaniesData = () => {
    const { dispatchLoadCompanies } = this.props
    dispatchLoadCompanies()
  }

  renderLoading = () => (
    <WapperLoading>
      <CircularLoading haveBackground size={200} />
    </WapperLoading>
  )

  renderCompanies = companiesData => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.companies)}
        results={companiesData.total}
        time={companiesData.time}
      />
      <CompaniesTable data={companiesData.data} />
      <TablePagination total={companiesData.pages} />
    </AminateFadeInWrapper>
  )

  render() {
    const { companiesLoading, companiesData } = this.props
    return (
      <Wrapper>
        {companiesLoading && this.renderLoading()}
        {_.isEmpty(companiesData) || this.renderCompanies(companiesData)}
      </Wrapper>
    )
  }
}

SearchCompanies.propTypes = {}

const mapStateToProps = createStructuredSelector({
  companiesLoading: selectCompaniesLoading(),
  companiesData: selectCompaniesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchLoadCompanies: () => {
    dispatch(loadCompanies())
  },
  dispatchChangePaginationParam: value => {
    dispatch(changePaginationParam(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'searchCompanies', reducer })
const withSaga = injectSaga({ key: 'searchCompanies', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SearchCompanies)
