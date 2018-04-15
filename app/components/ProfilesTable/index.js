import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableRow } from 'material-ui/Table'
import { CustomTableHead, TableHeadCell, CustomTableCell, CustomTableRow } from '../Table/styles'
import { Img } from './styles'

const ProfilesTable = ({ data }) => (
  <Paper>
    <Table fixedHeader={false}>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell><FormattedMessage {...messages.image} /></TableHeadCell>
          <TableHeadCell width={20}><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.agency} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.research_for} /></TableHeadCell>
          <TableHeadCell width={15}><FormattedMessage {...messages.province} /></TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <CustomTableRow key={entry.id}>
              <CustomTableCell center>
                <Img src={entry.image} alt={entry.name} />
              </CustomTableCell>
              <CustomTableCell center bold>{entry.academic_title}.{entry.name}</CustomTableCell>
              <CustomTableCell>{entry.agency}</CustomTableCell>
              <CustomTableCell>{entry.research_for}</CustomTableCell>
              <CustomTableCell center>{entry.province}</CustomTableCell>
            </CustomTableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      academic_title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      agency: PropTypes.string.isRequired,
      research_for: PropTypes.string.isRequired,
      province: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ProfilesTable
