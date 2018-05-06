import styled from 'styled-components'
import vars from '../../globals/vars'
import { CustomTableCell, CustomTableRow } from '../Table/styles'

const Bold = styled.span`
  font-weight: bold;
`

const HighlightTableRow = styled(CustomTableRow)`
`

const HighlightTableCell = styled(CustomTableCell)`
  br {
    display: none;
  }
  p {
    display: inline;
  }
  background: ${vars.white};
  && {
    padding: 3px 10px;
  }
  ${props => props.head ? `
    && {
       font-weight: bold;
    }
  ` : ''}
`

const WrapperTableCell = styled(CustomTableCell)`
  && {
    padding: 0 !important;
    height: 100%;
  }
`

export { Bold, HighlightTableCell, HighlightTableRow, WrapperTableCell }
