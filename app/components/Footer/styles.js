import styled from 'styled-components'
import vars from '../../globals/vars'

const Wrapper = styled.div `
  margin: 15px 0;
`

const WrapperInfo = styled.div `
  padding-top: 30px;
  background: ${vars.dark};
`

const WrapperCopy = styled.div `
  padding: 20px;
  text-align: center;
  background: ${vars.black};
`

const Text = styled.div `
  color: ${vars.white};
  font-size: 17px;
  margin-bottom: 15px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 12px;
    left: -12px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${vars.white};
    display: ${props => props.list ? 'block' : 'none'};
  }
`

export {
  Wrapper,
  WrapperInfo,
  WrapperCopy,
  Text,
}
