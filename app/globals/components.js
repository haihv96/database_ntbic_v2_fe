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
const AbsCenter = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const JustifyCenter = styled.div `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const AlignCenter = styled.div `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export {
  Container,
  Main,
  TextField,
  AbsCenter,
  AlignCenter,
  JustifyCenter,
}
