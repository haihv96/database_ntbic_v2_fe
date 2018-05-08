import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableRow } from 'material-ui/Table'
import { CustomTableHead, TableHeadCell, CustomTableCell } from '../Table/styles'
import TableRowEntry from '../TableRowEntry'
import { Img, ImgWrapper } from './styles'
import { AbsCenter } from '../../globals/components'
import HighlightResultTable from '../../components/HighlightResultTable'
import { calFieldValue } from '../../components/HighlightResultTable/utils'

const CompaniesTable = ({ data }) => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell><FormattedMessage {...messages.logo} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.base_technology_category} /></TableHeadCell>
          <TableHeadCell>Search match results</TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <TableRowEntry key={entry.id} id={entry.id} dataType="companies">
              <CustomTableCell center>
                <ImgWrapper>
                  <AbsCenter>
                    <Img src={entry.logo} alt={entry.name} />
                  </AbsCenter>
                </ImgWrapper>
              </CustomTableCell>
              <CustomTableCell
                dangerouslySetInnerHTML={{ __html: calFieldValue(entry.name) }}
              />
              <CustomTableCell center>{entry.base_technology_category}</CustomTableCell>
              <HighlightResultTable
                entry={entry}
                attr={['headquarters', 'company_code', 'founder', 'industry', 'research_for',
                  'technology_highlight', 'technology_using', 'results', 'products']}
                bonusAttr={['founder', 'industry']}
              />
            </TableRowEntry>
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
