import styled from 'styled-components'
import Card, { CardMedia } from 'material-ui/Card'
import vars from '../../globals/vars'

const CustomCard = styled(Card) `
  border: 1px solid ${vars.lightGrey};
  padding-top: 20px;
`

const CustomCardMedia = styled(CardMedia) `
  height: 120px;
  width: 120px;
  margin: 0 auto;
  border-radius: 50%;
`

export {
  CustomCardMedia,
  CustomCard,
}
