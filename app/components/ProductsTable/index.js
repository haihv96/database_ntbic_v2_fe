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
import HighlightResultTable from '../../components/HighlightResultTable'
import { calFieldValue } from '../../components/HighlightResultTable/utils'
import { AbsCenter } from '../../globals/components'

const ProductsTable = ({ data }) => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell><FormattedMessage {...messages.thumb} /></TableHeadCell>
          <TableHeadCell width={30}><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.base_technology_category} /></TableHeadCell>
          <TableHeadCell>Search match results</TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <TableRowEntry key={entry.id} id={entry.id} dataType="products">
              <CustomTableCell center>
                <ImgWrapper>
                  <AbsCenter>
                    <Img src={entry.thumb} alt={entry.name} />
                  </AbsCenter>
                </ImgWrapper>
              </CustomTableCell>
              <CustomTableCell
                dangerouslySetInnerHTML={{ __html: calFieldValue(entry.name) }}
              />
              <CustomTableCell center>{entry.base_technology_category}</CustomTableCell>
              <HighlightResultTable
                entry={entry}
                attr={['highlights', 'description', 'results']}
                bonusAttr={['highlights', 'description']}
              />
            </TableRowEntry>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

ProductsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumb: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      base_technology_category: PropTypes.string.isRequired,
      highlights: PropTypes.string,
    })
  ).isRequired,
}

export default ProductsTable
