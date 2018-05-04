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
  selectProjectsLoading,
  selectProjectsData,
} from './selectors'
import { loadProjects } from './actions'
import { changePaginationParam } from '../../FormSearchInput/PaginationParam/actions'
import SearchResultCate from '../../../components/SearchResultCate'
import ProjectsTable from '../../../components/ProjectsTable'
import CircularLoading from '../../../components/CircularLoading'
import TablePagination from '../../../components/TablePagination'

export class SearchProjects extends React.PureComponent {
  componentWillMount() {
    this.loadProjectsData()
  }

  componentWillReceiveProps({ searchQuery }) {
    if (this.props.searchQuery !== searchQuery) {
      this.loadProjectsData()
    }
  }

  loadProjectsData = () => {
    const { dispatchLoadProjects } = this.props
    dispatchLoadProjects()
  }

  renderLoading = () => (
    <WapperLoading>
      <CircularLoading haveBackground size={200} />
    </WapperLoading>
  )

  renderProjects = projectsData => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.projects)}
        results={10}
        time={0.3824782342}
      />
      <ProjectsTable data={projectsData.data} />
      <TablePagination total={projectsData.meta.last_page} />
    </AminateFadeInWrapper>
  )

  render() {
    const { projectsLoading, projectsData } = this.props
    return (
      <Wrapper>
        {projectsLoading && this.renderLoading()}
        {_.isEmpty(projectsData) || this.renderProjects(projectsData)}
      </Wrapper>
    )
  }
}

SearchProjects.propTypes = {}

const mapStateToProps = createStructuredSelector({
  projectsLoading: selectProjectsLoading(),
  projectsData: selectProjectsData(),
})

const mapDispatchToProps = dispatch => ({
  dispatchLoadProjects: () => {
    dispatch(loadProjects())
  },
  dispatchChangePaginationParam: value => {
    dispatch(changePaginationParam(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'searchProjects', reducer })
const withSaga = injectSaga({ key: 'searchProjects', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SearchProjects)
