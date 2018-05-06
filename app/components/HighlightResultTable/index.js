import React from 'react'
import _ from 'lodash'
import { calFieldValue } from './utils'
import { WrapperTableCell, HighlightTableCell, HighlightTableRow } from './styles'

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
                {value}
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
              <div dangerouslySetInnerHTML={{ __html: calFieldValue(entry[value]) }} />
            </HighlightTableCell>
          </HighlightTableRow>
        ))}
      </WrapperTableCell>
    )
  }
}

export default HighlightResultTable;

