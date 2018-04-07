import React from 'react'
import PropTypes from 'prop-types'
import { CardContent } from 'material-ui/Card'
import { CustomCardMedia, CustomCard, Name, Agency } from './styles'

const ProfileCardSlider = ({ image, name, agency }) => (
  <CustomCard>
    <CustomCardMedia
      image={image}
      title={name}
    />
    <CardContent>
      <Name>{name}</Name>
      <Agency>{agency}</Agency>
    </CardContent>
  </CustomCard>
)

ProfileCardSlider.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  agency: PropTypes.string.isRequired,
}

export default ProfileCardSlider
