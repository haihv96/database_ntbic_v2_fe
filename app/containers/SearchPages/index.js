import React from 'react'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import QueryString from 'querystring'
import SearchAll from './SearchAll'
import { ALL_VALUE } from '../../globals/constants'

const settingSearchPage = dataType => {
  switch (dataType) {
    case ALL_VALUE:
      return <SearchAll />
    default:
      return <SearchAll />
  }
}

class SearchPages extends React.PureComponent {
  render() {
    const params = QueryString.parse(_.replace(this.props.location.search, '?', ''))
    return (
      settingSearchPage(params.data_type)
    )
  }
}

export default withRouter(SearchPages)