import styled from 'styled-components'
import Dialog, {
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Table from 'material-ui/Table'
import vars from '../../globals/vars'

const CustomDialog = styled(Dialog) `
   && {
      border-radius: 0;
      & > div:nth-child(2) {
        width: 80%;
        max-width: none;
        min-width: 300px;
      }
      
      & > div:nth-child(2) > div:nth-child(2) > table {
        margin-top: 20px;
        border: 1px solid ${vars.lightGrey};
      }
   }
`
const CustomDialogTitle = styled(DialogTitle) `
   && {
      padding: 15px 0 15px 20px;
      background: ${vars.tableBlue};
      h2 {
        font-weight: bold;
        font-size:20px;
        color: ${vars.white};
      }
   }
`

const CustomDialogContent = styled(DialogContent) `
   && {
    font-size: 20px;
   }
`
const CustomTable = styled(Table)`
  transition: all 5s;
`

const Img = styled.img`
  max-width: 100px;
`

export { CustomDialog, CustomDialogContent, CustomDialogTitle, CustomTable, Img }
