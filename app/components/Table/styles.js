import styled from 'styled-components'
import vars from '../../globals/vars'
import { TableCell, TableHead, TableRow } from 'material-ui/Table'

const CustomTableHead = styled(TableHead) `
  background: ${vars.tableBlue};
`

const CustomTableRow = styled(TableRow) `
  &:nth-of-type(odd) {
    background: ${vars.blurGrey};
  }
`

const TableHeadCell = styled(TableCell) `
  && {
    color: ${vars.white};
    font-size: 15px;
    font-weight: bold;
  }
`

const CustomTableCell = styled(TableCell)`
  && {
    font-size: 14px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
  }
`

export { CustomTableHead, TableHeadCell, CustomTableRow, CustomTableCell }