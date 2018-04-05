import styled from 'styled-components'
import banner from '../../images/banner.jpg'
import vars from '../../globals/vars'
import Input from 'material-ui/Input'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'

const Wrapper = styled.div `
  margin-top: 10px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  height: 300px;
  padding: 15px;
  background-size: cover;
  @media only screen and (max-width: 768px)  {
    height: 400px;
  }
  @media only screen and (max-width: 480px)  {
    height: 450px;
  }
`

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: ${vars.white};
  padding-top: 40px;
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
  height: 48px;
  padding-left: 10px;
  margin: 0 3px 5px 0;
  @media only screen and (min-width: 768px)  {
    width: 35%;
  }
`

const MaterialSelect = styled(Select)`
  background: ${vars.white};
  width: 257px;
  padding: 3px 0 9px 10px;
  margin: 0 5px 5px 0;
`

const MaterialButton = styled(Button) `
  border-radius: 0;
  height: 48px;
  width: 60px;
  && {
    font-weight: bold;
  }
`

export {
  Wrapper,
  Title,
  CustomForm,
  MaterialInput,
  MaterialSelect,
  MaterialButton,
}
