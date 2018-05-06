import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableRow } from 'material-ui/Table'
import HighlightResultTable from '../../components/HighlightResultTable'
import { calFieldValue } from '../../components/HighlightResultTable/utils'
import { CustomTableHead, TableHeadCell, CustomTableCell, CustomTableRow } from '../Table/styles'

const ProjectsTable = ({ data }) => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.specialization} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.author} /></TableHeadCell>
          <TableHeadCell>Search match results</TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <CustomTableRow key={entry.id}>
              <CustomTableCell dangerouslySetInnerHTML={{ __html: calFieldValue(entry.name) }} />
              <CustomTableCell>{entry.specialization}</CustomTableCell>
              <CustomTableCell dangerouslySetInnerHTML={{ __html: calFieldValue(entry.author)}} />
              <HighlightResultTable entry={entry} attr={['description', 'highlights', 'operator', 'results']} />
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
