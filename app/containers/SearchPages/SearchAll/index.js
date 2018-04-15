import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'
import messages from './messages'
import injectSaga from '../../../utils/injectSaga'
import injectReducer from '../../../utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import {AminateFadeInWrapper} from './styles'
import {
  selectProjectsLoading,
  selectProjectsData,
  selectProfilesLoading,
  selectProfilesData,
  selectProductsLoading,
  selectProductsData,
  selectPatentsLoading,
  selectPatentsData,
  selectCompaniesLoading,
  selectCompaniesData,
} from './selectors'
import { loadCompanies, loadPatents, loadProducts, loadProfiles, loadProjects } from './actions'
import SearchResultCate from '../../../components/SearchResultCate'
import ProfilesTable from '../../../components/ProfilesTable'
import CircularLoading from '../../../components/CircularLoading'

export class SearchAll extends React.PureComponent {
  componentWillMount() {
    const {
      dispatchLoadProfiles,
      dispatchLoadProducts,
      dispatchLoadProjects,
      dispatchLoadPatents,
      dispatchLoadCompanies,
    } = this.props
    dispatchLoadProfiles()
    dispatchLoadCompanies()
    dispatchLoadProducts()
    dispatchLoadPatents()
    dispatchLoadProjects()
  }

  renderLoading = () => (
    <CircularLoading haveBackground wrapperHeight={300} size={100} />
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
    const { intl, profilesLoading, profilesData } = this.props
    console.log(profilesData)
    return (
      <div>
        {profilesLoading ? this.renderLoading() : this.renderProfiles(profilesData)}
      </div>
    )
  }
}

SearchAll.propTypes = {}

const mapStateToProps = createStructuredSelector({
  profilesLoading: selectProfilesLoading(),
  profilesData: selectProfilesData(),
  patentsLoading: selectPatentsLoading(),
  patentsData: selectPatentsData(),
  productsLoading: selectProductsLoading(),
  productsData: selectProductsData(),
  projectsLoading: selectProjectsLoading(),
  projectsData: selectProjectsData(),
  companiesLoading: selectCompaniesLoading(),
  companiesData: selectCompaniesData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchLoadProfiles: () => {
    dispatch(loadProfiles())
  },
  dispatchLoadProducts: () => {
    dispatch(loadProducts())
  },
  dispatchLoadProjects: () => {
    dispatch(loadProjects())
  },
  dispatchLoadPatents: () => {
    dispatch(loadPatents())
  },
  dispatchLoadCompanies: () => {
    dispatch(loadCompanies())
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'searchAll', reducer })
const withSaga = injectSaga({ key: 'searchAll', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SearchAll)
