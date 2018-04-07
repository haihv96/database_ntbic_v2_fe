import styled from 'styled-components'
import vars from '../../globals/vars'

const Wrapper = styled.div `
  padding: 20px;
  width: 100%;
  background: ${vars.lightGrey};
  opacity: .8;
  height: ${props => props.wrapperHeight ? `${props.wrapperHeight}px` : 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  Wrapper,
}