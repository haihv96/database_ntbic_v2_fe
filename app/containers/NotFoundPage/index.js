import { FormattedMessage } from 'react-intl'
import messages from './messages'

const NotFound = () => (
  <h1>
    <FormattedMessage {...messages.header} />
  </h1>
)

export default NotFound
