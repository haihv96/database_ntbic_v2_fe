import styled from 'styled-components'
import vars from '../../globals/vars'

const Wrapper = styled.div `
  position: relative;
  margin: 60px 0;
  font-weight: bold;
  height: 3px;
  background:linear-gradient(to right, ${vars.lightGrey}, ${vars.darkBlue}, ${vars.lightGrey});
`

const Text = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 10px;
  background: ${vars.white};
  border: solid 1px ${vars.darkBlue};
  color: ${vars.dark};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;
  @media only screen and (max-width: 980px){
    font-size: 20px;
  }
  @media only screen and (max-width: 768px){
    font-size: 18px;
  }
  @media only screen and (max-width: 480px){
    font-size: 16px;
  }
`

export {
  Wrapper,
  Text,
}
