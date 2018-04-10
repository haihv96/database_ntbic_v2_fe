import styled from 'styled-components'
import vars from '../../globals/vars'
import Input from 'material-ui/Input'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'

const Wrapper = styled.div `
  margin-top: 20px;
`

const MaterialInput = styled(Input)`
  background: ${vars.white};
  padding-left: 10px;
  min-height: 41px;
  margin: 0 3px 8px 0;
  border: solid 1px ${vars.lightGrey};
  border-bottom: 0;
  box-sizing: border-box;
  && {
    &:after {
      background-color: ${vars.lightBlue};
    }
  }
  @media only screen and (min-width: 768px)  {
    width: 35%;
  }
`

const MaterialSelect = styled(Select)`
  background: ${vars.white};
  max-width: 200px;
  margin: 0 3px 8px 0;
  border: solid 1px ${vars.lightGrey};
  border-bottom: 0;
  box-sizing: border-box;
  & > div > div {
    padding-left: 10px;
  }
  
  && {
    line-height: 27px;
    &:after {
      background-color: ${vars.lightBlue};
    }
  }
`

const MaterialButton = styled(Button) `
  height: 41px;
  width: 145px;
  && {
    border-radius: 0;
    margin-top: -4px;
    background-color: ${vars.midBlue};
    &:hover {
       background-color: ${vars.blue};
    }
  }
`

export {
  Wrapper,
  MaterialSelect,
  MaterialInput,
  MaterialButton,
}
