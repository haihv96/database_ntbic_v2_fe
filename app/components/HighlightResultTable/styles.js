import styled from 'styled-components'
import vars from '../../globals/vars'
import { CustomTableCell, CustomTableRow } from '../Table/styles'

const HighlightTableRow = styled(CustomTableRow)`
`

const HighlightTableCell = styled(CustomTableCell)`
  br {
    display: none;
  }
  p {
    display: inline;
  }
  strong {
     font-weight: normal;
  }
  img {
    display: none;
  }
  background: ${vars.white};
  && {
    padding: 3px 10px;
  }
  ${props => props.head ? `
    && {
       font-weight: bold;
    }
  ` :
  `
    width: 100%;
    height: 100% !important:
  `}
`

const WrapperTableCell = styled(CustomTableCell)`
  && {
    padding: 0 !important;
    height: 100%;
  }
`

const LimitString = styled.div`
    max-height: 60px;
    text-overflow: ellipsis;
    overflow: hidden; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export { HighlightTableCell, HighlightTableRow, WrapperTableCell, LimitString }
