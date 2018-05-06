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
  selectProfilesLoading,
  selectProfilesData,
} from './selectors'
import { loadProfiles } from './actions'
import { changePaginationParam } from '../../FormSearchInput/PaginationParam/actions'
import SearchResultCate from '../../../components/SearchResultCate'
import ProfilesTable from '../../../components/ProfilesTable'
import CircularLoading from '../../../components/CircularLoading'
import TablePagination from '../../../components/TablePagination'

export class SearchProfiles extends React.PureComponent {
  componentWillMount() {
    this.loadProfilesData()
  }

  componentWillReceiveProps({ searchQuery }) {
    if (this.props.searchQuery !== searchQuery) {
      this.loadProfilesData()
    }
  }

  loadProfilesData = () => {
    const { dispatchLoadProfiles } = this.props
    dispatchLoadProfiles()
  }

  renderLoading = () => (
    <WapperLoading>
      <CircularLoading haveBackground size={200} />
    </WapperLoading>
  )

  renderProfiles = profilesData => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.profiles)}
        results={10}
        time={0.3824782342}
      />
      <ProfilesTable data={profilesData.data} />
      <TablePagination total={profilesData.pages} />
    </AminateFadeInWrapper>
  )

  render() {
    const { profilesLoading, profilesData } = this.props
    return (
      <Wrapper>
        {profilesLoading && this.renderLoading()}
        {_.isEmpty(profilesData) || this.renderProfiles(profilesData)}
      </Wrapper>
    )
  }
}

SearchProfiles.propTypes = {}

const mapStateToProps = createStructuredSelector({
  profilesLoading: selectProfilesLoading(),
  profilesData: selectProfilesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchLoadProfiles: () => {
    dispatch(loadProfiles())
  },
  dispatchChangePaginationParam: value => {
    dispatch(changePaginationParam(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'searchProfiles', reducer })
const withSaga = injectSaga({ key: 'searchProfiles', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SearchProfiles)
