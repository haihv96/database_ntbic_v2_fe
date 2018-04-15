import styled from 'styled-components'
import vars from '../../globals/vars'

const Img = styled.img `
  width: 100%;
`

const ImgContainer = styled.div `
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: auto;
  border: 2px solid ${vars.lightGrey};
  overflow: hidden;
`

const ImgWrapper = styled.div `
  min-height: 70px;
  min-width: 90px;
`


export {
  Img,
  ImgWrapper,
  ImgContainer,
}