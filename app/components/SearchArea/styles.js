import styled from 'styled-components'
import banner from '../../images/banner.png'
import vars from '../../globals/vars'
import Input from 'material-ui/Input'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'

const Wrapper = styled.div `
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center center;
  height: 400px;
  padding: 15px;
  background-size: 100% 100%;
  border-top: 10px solid ${vars.white};
  @media only screen and (max-width: 480px)  {
    height: 450px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div `
  width: 100%;
`

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: ${vars.white};
`

const CustomForm = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px)  {
    flex-direction: column;
  }
`

const MaterialInput = styled(Input)`
  background: ${vars.white};
  padding-left: 10px;
  min-height: 45px;
  margin: 0px 3px 8px 0;
  @media only screen and (min-width: 768px)  {
    width: 35%;
  }
`

const MaterialSelect = styled(Select)`
  background: ${vars.white};
  max-width: 200px;
  margin: 0px 3px 8px 0;
  & > div > div {
    padding-left: 10px;
  }
  && {
    line-height: 32px;
  }
`

const MaterialButton = styled(Button) `
  height: 44px;
  max-width: 120px;
  && {
    font-weight: bold;
    border-radius: 0;
 }
`

export {
  Wrapper,
  Title,
  CustomForm,
  MaterialInput,
  MaterialSelect,
  MaterialButton,
  Container,
}
