import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Slider from 'react-slick'
import vars from '../../globals/vars'

const Wrapper = styled.div `
  margin-bottom: 60px;
`

const SliderWrapper = styled.div `
  border-left: 1px dashed ${vars.grey};
  border-right: 1px dashed ${vars.grey};
  animation: ${ keyframes`${fadeIn}`} 0.8s ease-in-out;
`

const CustomSlider = styled(Slider) `
  & > .slick-arrow:before {
    color: ${vars.black};
  }
  
  & > .slick-dots {
    @media only screen and (max-width: 480px)  {
      bottom: -50px;
    }
  }
  
  @media only screen and (max-width: 680px)  {
    & > .slick-next {
      right: -19px;
    }
  }
  
  @media only screen and (max-width: 480px)  {
    & > .slick-next {
      right: -15px;
    }
  }

`

export {
  Wrapper,
  CustomSlider,
  SliderWrapper,
}
