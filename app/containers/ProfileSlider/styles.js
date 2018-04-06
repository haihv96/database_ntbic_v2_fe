import styled from 'styled-components'
import Slider from 'react-slick'
import vars from '../../globals/vars'

const Wrapper = styled.div `
  margin-bottom: 50px;
`

const SliderWrapper = styled.div `
  background: ${vars.dark};
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
