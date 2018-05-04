import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const AminateFadeInWrapper = styled.div `
  animation: ${keyframes`${fadeIn}`} .8s ease-in-out;
`

const WapperLoading = styled.div `
  margin: 10px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`

const Wrapper = styled.div`
  position: relative;
  min-height: 500px;
  margin-bottom: 20px;
`

export {
  AminateFadeInWrapper,
  WapperLoading,
  Wrapper,
}
