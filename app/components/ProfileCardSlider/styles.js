import styled from 'styled-components'
import Card, { CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import vars from '../../globals/vars'

const CustomCard = styled(Card) `
  border: 1px dashed ${vars.grey};
  border-left: 0;
  && {
    box-shadow: none;
    border-radius: 0;
 }
  height: 260px;
  padding-top: 20px;
`

const CustomCardMedia = styled(CardMedia) `
  height: 143px;
  width: 110px;
  margin: 0 auto;
`

const Name = styled(Typography)`
  && {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
 }
`

const Agency = styled(Typography)`
  && {
    font-size: 12px;
    text-align: center;
    max-height: 51px;
    text-overflow: ellipsis;
    overflow: hidden; 
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
 }
`

export {
  CustomCardMedia,
  CustomCard,
  Name,
  Agency,
}
