import styled from 'styled-components'
import vars from '../../globals/vars'

const Wrapper = styled.div `
  width: ${props => props.wrapperWidth ? `${props.wrapperWidth}px` : '100%'};
  background-color: ${props => props.haveBackground ? vars.lightGrey : vars.white};
  opacity: .8;
  height: ${props => props.wrapperHeight ? `${props.wrapperHeight}px` : 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Wrapper }
