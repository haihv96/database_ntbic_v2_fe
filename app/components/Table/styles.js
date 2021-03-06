import styled from 'styled-components'
import React from 'react'
import vars from '../../globals/vars'
import { TableCell, TableHead, TableRow } from 'material-ui/Table'

const CustomTableHead = styled(TableHead) `
  background: ${vars.tableBlue};
`

const CustomTableRow = styled(TableRow) `
  &:nth-of-type(odd) {
    background: ${vars.blurGrey};
  }
  ${props => props.entry ? `
    && {
      &:hover {
        background: ${vars.blurBlue} !important;
        cursor: pointer;
        td:last-child td {
           background: ${vars.blurBlue} !important;
        }
      }
    }
  ` : ''}
`

const TableHeadCell = styled(TableCell) `
  && {
    color: ${vars.white};
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    border-right: 1px solid ${vars.lightGrey};
    width: ${props => props.width ? `${props.width}%` : 'auto'}
  }
`

const CustomTableCell = styled(({ bold, center, ...rest }) => <TableCell {...rest} />)`
  && {
    padding: 10px;
    position: relative;
    border-right: 1px solid ${vars.lightGrey};
    font-size: 13px;
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    text-align: ${props => props.center ? 'center' : 'left'};
    ${props => props.width ? `width: ${props.width}%` : ''};
  }
`

export { CustomTableHead, TableHeadCell, CustomTableRow, CustomTableCell }