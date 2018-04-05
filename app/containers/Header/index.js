import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import makeSelectHeader from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import Navigation from '../../components/Navigation'
import SearchArea from '../../components/SearchArea'

const Header = () => (
  <div>
    <Navigation />
    <SearchArea />
  </div>
)


Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'header', reducer })
const withSaga = injectSaga({ key: 'header', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Header)
