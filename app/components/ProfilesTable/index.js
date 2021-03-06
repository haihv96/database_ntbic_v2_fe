import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableRow } from 'material-ui/Table'
import { CustomTableHead, TableHeadCell, CustomTableCell } from '../Table/styles'
import TableRowEntry from '../TableRowEntry'
import { Img, ImgWrapper, ImgContainer } from './styles'
import HighlightResultTable from '../../components/HighlightResultTable'
import { calFieldValue } from '../../components/HighlightResultTable/utils'
import { AbsCenter } from '../../globals/components'

const ProfilesTable = ({ data }) => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell><FormattedMessage {...messages.image} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.name} /></TableHeadCell>
          <TableHeadCell><FormattedMessage {...messages.agency} /></TableHeadCell>
          <TableHeadCell>Search match results</TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {_.map(data, entry => {
          return (
            <TableRowEntry key={entry.id} id={entry.id} dataType="profiles">
              <CustomTableCell center>
                <ImgWrapper>
                  <AbsCenter>
                    <ImgContainer>
                      <Img src={entry.image} alt={entry.name} />
                    </ImgContainer>
                  </AbsCenter>
                </ImgWrapper>
              </CustomTableCell>
              <CustomTableCell
                dangerouslySetInnerHTML={{ __html: calFieldValue(`${entry.academic_title}. ${entry.name}`) }}
              />
              <CustomTableCell dangerouslySetInnerHTML={{ __html: calFieldValue(entry.agency) }} />
              <HighlightResultTable
                entry={entry}
                attr={['specialization', 'research_for', 'research_joined', 'research_results']}
                bonusAttr={['specialization', 'province']}
              />
            </TableRowEntry>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

ProfilesTable.propTypes = {
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
