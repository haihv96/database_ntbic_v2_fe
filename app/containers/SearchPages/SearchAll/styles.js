import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const AminateFadeInWrapper = styled.div `
  animation: ${keyframes`${fadeIn}`} .8s ease-in-out;
  
`
export {
  AminateFadeInWrapper,
}