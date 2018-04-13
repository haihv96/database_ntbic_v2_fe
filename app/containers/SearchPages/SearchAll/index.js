import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { injectIntl } from 'react-intl'
import messages from './messages'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import reducer from './reducer'
import saga from './saga'
import SearchResultCate from '../../../components/SearchResultCate'
import Table from '../../../components/Table'

export class SearchAll extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { intl } = this.props
    return (
      <div>
        <SearchResultCate
          dataType="profiles"
          results={10}
          time={0.3824782342}
        />
        <Table />
        <SearchResultCate
          dataType="profiles"
          results={10}
          time={0.3824782342}
        />
        <Table />
        <SearchResultCate
          dataType="profiles"
          results={10}
          time={0.3824782342}
        />
        <Table />
        <SearchResultCate
          dataType="profiles"
          results={10}
          time={0.3824782342}
        />
        <Table />
      </div>
    )
  }
}

SearchAll.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchAll', reducer });
const withSaga = injectSaga({ key: 'searchAll', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SearchAll)
