import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableRow } from 'material-ui/Table'
import { CustomTableHead, TableHeadCell, CustomTableCell } from '../Table/styles'
import TableRowEntry from '../TableRowEntry'
import HighlightResultTable from '../../components/HighlightResultTable'
import { calFieldValue } from '../../components/HighlightResultTable/utils'

const PatentsTable = ({ data }) => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.base_technology_category} /></TableHeadCell>
          <TableHeadCell>Search match results</TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <TableRowEntry key={entry.id} id={entry.id} dataType="patents">
              <CustomTableCell
                dangerouslySetInnerHTML={{ __html: calFieldValue(entry.name) }}
              />
              <CustomTableCell center>{entry.base_technology_category}</CustomTableCell>
              <HighlightResultTable
                entry={entry}
                attr={['patent_code', 'owner', 'author', 'highlights', 'description']}
                bonusAttr={['patent_code', 'owner']}
              />
            </TableRowEntry>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

PatentsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      base_technology_category: PropTypes.string.isRequired,
      patent_code: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      public_date: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default PatentsTable
