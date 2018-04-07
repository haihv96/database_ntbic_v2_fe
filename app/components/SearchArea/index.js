import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { createStructuredSelector } from 'reselect'
import { selectQuery, selectType } from './selectors'
import injectReducer from '../../utils/injectReducer'
import reducer from './reducer'
import { changeType, changeQuery } from './actions'
import {
  Wrapper,
  Title,
  CustomForm,
  MaterialInput,
  MaterialSelect,
  MaterialButton,
  SmallWhiteSpace,
} from './styles'

class SearchArea extends React.PureComponent {
  handleChangeType = e => {
    this.props.dispatchChangeType(e.target.value)
  }

  handleChangeQuery = e => {
    this.props.dispatchChangeQuery(e.target.value)
  }

  handleSubmit = () => {
    const { history, type, query } = this.props
    history.push(`/search?type=${type}&query=${query}`)
  }

  render() {
    const { type, intl } = this.props
    return (
      <Wrapper>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
        <CustomForm onSubmit={this.handleSubmit}>
          <MaterialInput
            onChange={this.handleChangeQuery}
            placeholder={intl.formatMessage(messages.placeholder)}
          />
          <MaterialSelect value={type} onChange={this.handleChangeType}>
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
            <FormattedMessage {...messages.search} />
          </MaterialButton>
        </CustomForm>
      </Wrapper>
    )
  }
}

SearchArea.propTypes = {
  type: PropTypes.string,
  query: PropTypes.string,
}

const mapStateToProps = () => createStructuredSelector({
  type: selectType(),
  query: selectQuery(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeQuery: value => {
    dispatch(changeQuery(value))
  },
  dispatchChangeType: value => {
    dispatch(changeType(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const withReducer = injectReducer({ key: 'searchArea', reducer })

export default compose(
  withReducer,
  withConnect,
  withRouter,
  injectIntl,
)(SearchArea)
