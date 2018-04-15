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
  selectProfilesLoading,
  selectProfilesData,
} from './selectors'
import { loadProfiles } from './actions'
import SearchResultCate from '../../../components/SearchResultCate'
import ProfilesTable from '../../../components/ProfilesTable'
import CircularLoading from '../../../components/CircularLoading'

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
      <CircularLoading haveBackground wrapperHeight={300} size={100} />
    </WapperLoading>
  )

  renderProfiles = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType="profiles"
        results={10}
        time={0.3824782342}
      />
      <ProfilesTable data={data} />
    </AminateFadeInWrapper>
  )

  render() {
    const {
      profilesLoading, profilesData,
    } = this.props
    return (
      <div>
        {profilesLoading ? this.renderLoading() : this.renderProfiles(profilesData)}
      </div>
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
