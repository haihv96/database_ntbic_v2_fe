import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableRow } from 'material-ui/Table'
import { CustomTableHead, TableHeadCell, CustomTableCell, CustomTableRow } from '../Table/styles'

const PatentsTable = ({ data }) => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell width={15}><FormattedMessage {...messages.base_technology_category} /></TableHeadCell>
          <TableHeadCell width={15}><FormattedMessage {...messages.patent_code} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.author} /></TableHeadCell>
          <TableHeadCell width={15}><FormattedMessage {...messages.public_date} /></TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <CustomTableRow key={entry.id}>
              <CustomTableCell bold>{entry.name}</CustomTableCell>
              <CustomTableCell center>{entry.base_technology_category}</CustomTableCell>
              <CustomTableCell center>{entry.patent_code}</CustomTableCell>
              <CustomTableCell>{entry.author}</CustomTableCell>
              <CustomTableCell center>{entry.public_date}</CustomTableCell>
            </CustomTableRow>
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
