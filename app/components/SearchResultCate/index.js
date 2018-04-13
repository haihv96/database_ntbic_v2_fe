import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import { Wrapper, HightLight } from './styles'
import SearchIcon from 'react-icons/lib/md/search'

const SearchResultCate = ({ dataType, keyword, results = 0, time, textRef, ref }) => (
  <Wrapper>
    <SearchIcon />
    <FormattedMessage {...messages.baseTitleFirst} />
    &nbsp;{dataType}
    &nbsp;<FormattedMessage {...messages.baseTitleSecond} />
    &nbsp;" {keyword} "
    &nbsp;<FormattedMessage {...messages.is} />
    &nbsp;&nbsp;<HightLight>{results}</HightLight>
    &nbsp;&nbsp;<FormattedMessage {...messages.on} />
    &nbsp;&nbsp;<HightLight>{time}</HightLight>
    &nbsp;&nbsp;<FormattedMessage {...messages.second} />
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

export default SearchResultCate
