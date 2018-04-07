import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const Wrapper = styled.div `
  margin-top: 5px;
`

const PieChartList = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const PieChartItem = styled.div `
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const WrapperPieChart = styled.div `
  animation: ${ keyframes`${fadeIn}`} 1s ease-in-out;
`

export {
  Wrapper,
  PieChartList,
  PieChartItem,
  WrapperPieChart,
}
