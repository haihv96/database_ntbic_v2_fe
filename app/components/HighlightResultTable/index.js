import React from 'react'
import _ from 'lodash'
import messages from '../../globals/messages'
import { FormattedMessage } from 'react-intl'
import { calFieldValue } from './utils'
import { WrapperTableCell, HighlightTableCell, HighlightTableRow, LimitString } from './styles'

class HighlightResultTable extends React.PureComponent {
  render() {
    const { entry, attr, bonusAttr = [] } = this.props
    let highlightCell = 0;
    return (
      <WrapperTableCell>
        {
          _.map(attr, value => (
            _.isArray(entry[value]) && (highlightCell = highlightCell + 1) &&
            <HighlightTableRow key={value}>
              <HighlightTableCell head>
                {messages[value] ? <FormattedMessage {...messages[value]} /> : value}
              </HighlightTableCell>
              <HighlightTableCell>
                <div dangerouslySetInnerHTML={{ __html: calFieldValue(entry[value]) + '...' }} />
              </HighlightTableCell>
            </HighlightTableRow>
          ))
        }
        {highlightCell <= 1 &&
        _.map(bonusAttr, value => (
          !_.isArray(entry[value]) && highlightCell <= 1 && (highlightCell = highlightCell + 1) &&
          <HighlightTableRow key={value}>
            <HighlightTableCell head>
              {value}
            </HighlightTableCell>
            <HighlightTableCell>
              <LimitString dangerouslySetInnerHTML={{ __html: calFieldValue(entry[value]) }} />
            </HighlightTableCell>
          </HighlightTableRow>
        ))}
      </WrapperTableCell>
    )
  }
}

export default HighlightResultTable;

