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
} from './selectors'
import { loadProjects } from './actions'
import SearchResultCate from '../../../components/SearchResultCate'
import ProjectsTable from '../../../components/ProjectsTable'
import CircularLoading from '../../../components/CircularLoading'

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
      <CircularLoading haveBackground wrapperHeight={300} size={100} />
    </WapperLoading>
  )

  renderProjects = data => (
    <AminateFadeInWrapper>
      <SearchResultCate
        dataType={this.props.intl.formatMessage(messages.projects)}
        results={10}
        time={0.3824782342}
      />
      <ProjectsTable data={data} />
    </AminateFadeInWrapper>
  )

  render() {
    const {
      projectsLoading, projectsData,
    } = this.props
    return (
      <div>
        {projectsLoading ? this.renderLoading() : this.renderProjects(projectsData)}
      </div>
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
