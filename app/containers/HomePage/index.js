import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

const  HomePage = () => (
  <h1>
    <FormattedMessage {...messages.header} />
  </h1>
)

export default HomePage
