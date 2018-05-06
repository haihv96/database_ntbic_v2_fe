import React from 'react'
import { calFieldValue } from './utils'
import { WrapperTableCell, HighlightTableCell, HighlightTableRow, Bold } from './styles'

const HighlightResultTable = ({ entry, attr }) => (
  <WrapperTableCell>
    {
      _.map(attr, (value) => (
        entry[value] &&
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
  </WrapperTableCell>
)

export default HighlightResultTable;

