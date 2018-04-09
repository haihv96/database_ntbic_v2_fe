import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { FormattedMessage, injectIntl } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import injectReducer from 'utils/injectReducer'
import { selectDataType, selectQuery } from './selectors'
import { changeDataType, changeQuery } from './actions'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import {
  Wrapper,
  MaterialInput,
  MaterialSelect,
  MaterialButton,
} from './styles'
import SearchIcon from 'react-icons/lib/md/search'
import { changeType } from "../../components/SearchArea/actions";

export class SearchInput extends React.PureComponent {
  handleChangeDataType = e => {
    this.props.dispatchChangeDataType(e.target.value)
  }

  handleChangeQuery = e => {
    this.props.dispatchChangeQuery(e.target.value)
  }

  render() {
    const { intl, dataType } = this.props
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <MaterialInput
            onChange={this.handleChangeQuery}
            placeholder={intl.formatMessage(messages.placeholder)}
          />
          <MaterialSelect value={dataType} onChange={this.handleChangeDataType}>
            <MenuItem value="all">
              <em><FormattedMessage {...messages.all} /></em>
            </MenuItem>
            <MenuItem value="profiles"><FormattedMessage {...messages.profiles} /></MenuItem>
            <MenuItem value="projects"><FormattedMessage {...messages.projects} /></MenuItem>
            <MenuItem value="patents"><FormattedMessage {...messages.patents} /></MenuItem>
            <MenuItem value="products"><FormattedMessage {...messages.products} /></MenuItem>
            <MenuItem value="companies"><FormattedMessage {...messages.companies} /></MenuItem>
          </MaterialSelect>
          <MaterialButton type="submit" variant="raised" color="primary">
            <SearchIcon size={20} /><FormattedMessage {...messages.search} />
          </MaterialButton>
        </form>
      </Wrapper>
    )
  }
}

SearchInput.propTypes = {
  dataType: PropTypes.string,
  query: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  dataType: selectDataType(),
  query: selectQuery(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeQuery: value => {
    dispatch(changeQuery(value))
  },
  dispatchChangeDataType: value => {
    dispatch(changeDataType(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'searchInput', reducer })
const withSaga = injectSaga({ key: 'searchInput', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(SearchInput)
