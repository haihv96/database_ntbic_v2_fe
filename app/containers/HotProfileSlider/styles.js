import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Slider from 'react-slick'
import vars from '../../globals/vars'

const Wrapper = styled.div `
  margin-bottom: 50px;
`

const SliderWrapper = styled.div `
  border-left: 1px dotted ${vars.blurOrange};
  border-right: 1px dotted ${vars.blurOrange};
  animation: ${ keyframes`${fadeIn}`} 0.8s ease-in-out;
`

const CustomSlider = styled(Slider) `
  & > .slick-arrow:before {
    color: ${vars.black};
  }
`

export {
  Wrapper,
  CustomSlider,
  SliderWrapper,
}
