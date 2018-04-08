import styled from 'styled-components'
import vars from './vars'

const Container = styled.div `
`
const Main = styled.div `
  width: 90%;
  margin: auto;
`
const TextField = styled.span `
  color: ${props => props.color ? vars[props.color] : vars['white']};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  ${props => props.size && `font-size: ${props.size}px`};
`

export {
  Container,
  Main,
  TextField,
}
