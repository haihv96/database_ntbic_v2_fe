import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableRow } from 'material-ui/Table'
import { CustomTableHead, TableHeadCell, CustomTableCell, CustomTableRow } from '../Table/styles'

const ProjectsTable = ({ data }) => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell width={40}><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.specialization} /></TableHeadCell>
          <TableHeadCell width={15}><FormattedMessage {...messages.project_code} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.author} /></TableHeadCell>
          <TableHeadCell width={15}><FormattedMessage {...messages.close_date} /></TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <CustomTableRow key={entry.id}>
              <CustomTableCell bold>{entry.name}</CustomTableCell>
              <CustomTableCell>{entry.specialization}</CustomTableCell>
              <CustomTableCell center>{entry.project_code}</CustomTableCell>
              <CustomTableCell>{entry.author}</CustomTableCell>
              <CustomTableCell center>{entry.close_date}</CustomTableCell>
            </CustomTableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

ProjectsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      specialization: PropTypes.string.isRequired,
      project_code: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      close_date: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ProjectsTable
