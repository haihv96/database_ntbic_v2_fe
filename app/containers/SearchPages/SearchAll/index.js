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
import ProjectsTable from '../../../components/ProjectsTable'
import PatentsTable from '../../../components/PatentsTable'
import ProductsTable from '../../../components/ProductsTable'
import CompaniesTable from '../../../components/CompaniesTable'

export class SearchAll extends React.PureComponent {
  componentWillMount() {
    this.loadSearchQuery()
  }

  componentWillReceiveProps({ searchQuery }) {
    if (this.props.searchQuery !== searchQuery) {
      this.loadSearchQuery()
    }
  }

  loadSearchQuery = () => {
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
    <WapperLoading>
      <CircularLoading haveBackground wrapperHeight={300} size={100} />
    </WapperLoading>
  )

  renderProfiles = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.profiles)}
        results={data.total}
        time={data.time}
      />
      <ProfilesTable data={data.data} />
    </AminateFadeInWrapper>
  )

  renderProjects = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.projects)}
        results={data.total}
        time={data.time}
      />
      <ProjectsTable data={data.data} />
    </AminateFadeInWrapper>
  )

  renderPatents = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.patents)}
        results={data.total}
        time={data.time}
      />
      <PatentsTable data={data.data} />
    </AminateFadeInWrapper>
  )

  renderProducts = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.products)}
        results={data.total}
        time={data.time}
      />
      <ProductsTable data={data.data} />
    </AminateFadeInWrapper>
  )

  renderCompanies = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.companies)}
        results={data.total}
        time={data.time}
      />
      <CompaniesTable data={data.data} />
    </AminateFadeInWrapper>
  )

  render() {
    const {
      profilesLoading, profilesData,
      projectsLoading, projectsData,
      patentsLoading, patentsData,
      productsLoading, productsData,
      companiesLoading, companiesData,
    } = this.props
    return (
      <div>
        {profilesLoading ? this.renderLoading() : this.renderProfiles(profilesData)}
        {projectsLoading ? this.renderLoading() : this.renderProjects(projectsData)}
        {patentsLoading ? this.renderLoading() : this.renderPatents(patentsData)}
        {productsLoading ? this.renderLoading() : this.renderProducts(productsData)}
        {companiesLoading ? this.renderLoading() : this.renderCompanies(companiesData)}
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
