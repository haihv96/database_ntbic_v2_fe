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
  selectPatentsLoading,
  selectPatentsData,
} from './selectors'
import { loadPatents } from './actions'
import SearchResultCate from '../../../components/SearchResultCate'
import PatentsTable from '../../../components/PatentsTable'
import CircularLoading from '../../../components/CircularLoading'

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
      <CircularLoading haveBackground wrapperHeight={300} size={100} />
    </WapperLoading>
  )

  renderPatents = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.patents)}
        results={10}
        time={0.3824782342}
      />
      <PatentsTable data={data} />
    </AminateFadeInWrapper>
  )

  render() {
    const {
      patentsLoading, patentsData,
    } = this.props
    return (
      <div>
        {patentsLoading ? this.renderLoading() : this.renderPatents(patentsData)}
      </div>
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
