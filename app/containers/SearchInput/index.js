import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import {
  Wrapper,
  MaterialButton,
} from './styles'
import SearchIcon from 'react-icons/lib/md/search'
import DataTypeSelect from '../FormSearchInput/DataTypeSelect'
import QueryInput from '../FormSearchInput/QueryInput'
import ProvinceSelect from '../FormSearchInput/ProvinceSelect'

export class SearchInput extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <form>
          <QueryInput />
          <DataTypeSelect />
          <ProvinceSelect />
          <MaterialButton type="submit" variant="raised" color="primary">
            <SearchIcon size={20} /><FormattedMessage {...messages.search} />
          </MaterialButton>
        </form>
      </Wrapper>
    )
  }
}

export default SearchInput
