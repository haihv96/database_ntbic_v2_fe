import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { CustomTableHead, TableHeadCell,CustomTableCell, CustomTableRow } from './styles'

let id = 0;

function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const Table1 = () => (
  <Paper>
    <Table>
      <CustomTableHead>
        <TableRow>
          <TableHeadCell>Image</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Agency</TableHeadCell>
          <TableHeadCell>Research for</TableHeadCell>
          <TableHeadCell>Province</TableHeadCell>
        </TableRow>
      </CustomTableHead>
      <TableBody>
        {data.map(n => {
          return (
            <CustomTableRow key={n.id}>
              <CustomTableCell>{n.name}</CustomTableCell>
              <CustomTableCell>{n.calories}</CustomTableCell>
              <CustomTableCell>{n.fat}</CustomTableCell>
              <CustomTableCell>{n.carbs}</CustomTableCell>
              <CustomTableCell>{n.protein}</CustomTableCell>
            </CustomTableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
)

Table.propTypes = {}

export default Table1
