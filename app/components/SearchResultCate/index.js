import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import queryString from 'query-string'
import { queryAPIValue } from '../../containers/FormSearchInput/selectors'
import { selectPaginationParam } from '../../containers/FormSearchInput/PaginationParam/selectors'
import messages from './messages'
import { Wrapper, HightLight } from './styles'
import SearchIcon from 'react-icons/lib/md/search'

const SearchResultCate = ({ dataType, page, query, results = 0, time, textRef, ref }) => (
  <Wrapper>
    <SearchIcon />
    <FormattedMessage {...messages.found} />
    &nbsp;<HightLight>{results}</HightLight>
    &nbsp;&nbsp;<FormattedMessage {...messages.baseTitleFirst} />
    &nbsp;<i>{dataType}</i>
    &nbsp;<FormattedMessage {...messages.baseTitleSecond} />
    &nbsp;<HightLight>" {queryString.parse(query).query} "</HightLight>
    &nbsp;&nbsp;<FormattedMessage {...messages.on} />
    &nbsp;&nbsp;<HightLight>{time}</HightLight>
    &nbsp;&nbsp;<FormattedMessage {...messages.second} />
    &nbsp;(
    <FormattedMessage {...messages.page} />
    &nbsp;{page ? page : 1}
    )
    {
      textRef && ref && <Link to={ref}>{textRef}</Link>
    }
  </Wrapper>
)

SearchResultCate.propTypes = {
  dataType: PropTypes.string,
  keyword: PropTypes.string,
  results: PropTypes.number,
  time: PropTypes.number,
  ref: PropTypes.string,
  textRef: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  query: queryAPIValue(),
  page: selectPaginationParam(),
})

export default connect(mapStateToProps)(SearchResultCate)
