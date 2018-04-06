import styled from 'styled-components'
import vars from './vars'

const Container = styled.div ``
const Main = styled.div `
  width: 90%;
  margin: auto;
`
const TextField = styled.span `
  color: ${props => props.color ? vars[props.color] : vars['white']};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.normal ? '24px' : '20px'};
  font-size: ${props => props.big ? '28px' : '20px'};
  font-size: ${props => props.large ? '32px' : '20px'};
`

export {
  Container,
  Main,
  TextField,
}
