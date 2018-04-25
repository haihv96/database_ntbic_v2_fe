import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'
import messages from './messages'
import injectSaga from '../../../utils/injectSaga'
import injectReducer from '../../../utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import { AminateFadeInWrapper, WapperLoading } from './styles'
import {
  selectCompaniesLoading,
  selectCompaniesData,
} from './selectors'
import { loadCompanies } from './actions'
import SearchResultCate from '../../../components/SearchResultCate'
import CompaniesTable from '../../../components/CompaniesTable'
import CircularLoading from '../../../components/CircularLoading'

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
      <CircularLoading haveBackground wrapperHeight={300} size={100} />
    </WapperLoading>
  )

  renderCompanies = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.companies)}
        results={10}
        time={0.3824782342}
      />
      <CompaniesTable data={data} />
    </AminateFadeInWrapper>
  )

  render() {
    const {
      companiesLoading, companiesData,
    } = this.props
    return (
      <div>
        {companiesLoading ? this.renderLoading() : this.renderCompanies(companiesData)}
      </div>
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
