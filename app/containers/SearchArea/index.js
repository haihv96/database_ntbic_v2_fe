import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import messages from './messages'
import { MenuItem } from 'material-ui/Menu'
import { createStructuredSelector } from 'reselect'
import { selectQuery } from '../../containers/FormSearchInput/QueryInput/selectors'
import { changeQuery } from '../../containers/FormSearchInput/QueryInput/actions'
import { selectDataType } from '../../containers/FormSearchInput/DataTypeSelect/selectors'
import { changeDataType } from '../../containers/FormSearchInput/DataTypeSelect/actions'
import {
  Wrapper,
  Title,
  CustomForm,
  MaterialInput,
  MaterialSelect,
  MaterialButton,
  Container,
} from './styles'
import { ALL_VALUE } from '../../globals/constants'
import SearchIcon from 'react-icons/lib/md/search'
import { checkInputHasValue } from '../../globals/utils'

class SearchArea extends React.PureComponent {
  handleChangeType = e => {
    this.props.dispatchChangeType(e.target.value)
  }

  handleChangeQuery = e => {
    this.props.dispatchChangeQuery(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault()
    const { history, dataType, query } = this.props
    const queryInput = checkInputHasValue(query) ? `&query=${query}` : ''
    history.push(`/search/?data_type=${dataType}${queryInput}`)
  }

  render() {
    const { dataType, intl } = this.props
    return (
      <Wrapper>
        <Container>
          <Title>
            <FormattedMessage {...messages.title} />
          </Title>
          <CustomForm onSubmit={this.handleSubmit}>
            <MaterialInput
              onChange={this.handleChangeQuery}
              placeholder={intl.formatMessage(messages.placeholder)}
            />
            <MaterialSelect value={dataType} onChange={this.handleChangeType}>
              <MenuItem value={ALL_VALUE}>
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
          </CustomForm>
        </Container>
      </Wrapper>
    )
  }
}

SearchArea.propTypes = {
  dataType: PropTypes.string,
  query: PropTypes.string,
}

const mapStateToProps = () => createStructuredSelector({
  dataType: selectDataType(),
  query: selectQuery(),
})

const mapDispatchToProps = dispatch => ({
  dispatchChangeQuery: value => {
    dispatch(changeQuery(value))
  },
  dispatchChangeType: value => {
    dispatch(changeDataType(value))
  },
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect,
  withRouter,
  injectIntl,
)(SearchArea)
