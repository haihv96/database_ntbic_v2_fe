import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableRow } from 'material-ui/Table'
import { CustomTableHead, TableHeadCell, CustomTableCell, CustomTableRow } from '../Table/styles'
import { Img, ImgWrapper } from './styles'
import { AbsCenter } from '../../globals/components'

const CompaniesTable = ({ data }) => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell><FormattedMessage {...messages.logo} /></TableHeadCell>
          <TableHeadCell width={30}><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell width={20}><FormattedMessage {...messages.base_technology_category} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.headquarters} /></TableHeadCell>
          <TableHeadCell width={15}><FormattedMessage {...messages.province} /></TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <CustomTableRow key={entry.id}>
              <CustomTableCell center>
                <ImgWrapper>
                  <AbsCenter>
                    <Img src={entry.logo} alt={entry.name} />
                  </AbsCenter>
                </ImgWrapper>
              </CustomTableCell>
              <CustomTableCell bold>{entry.name}</CustomTableCell>
              <CustomTableCell center>{entry.base_technology_category}</CustomTableCell>
              <CustomTableCell>{entry.headquarters}</CustomTableCell>
              <CustomTableCell center>{entry.province}</CustomTableCell>
            </CustomTableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

CompaniesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      base_technology_category: PropTypes.string.isRequired,
      headquarters: PropTypes.string.isRequired,
      province: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default CompaniesTable
