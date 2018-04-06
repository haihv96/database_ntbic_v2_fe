import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import anonUser from '../../images/anon_user.png'
import { CustomCardMedia, CustomCard } from './styles'

const ProfileCardSlider = () => (
  <CustomCard>
    <CustomCardMedia
      image={anonUser}
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography variant="title">
        Lizard Lizard
      </Typography>
      <Typography component="p">
        Lizards are a widespread group
      </Typography>
    </CardContent>
  </CustomCard>
)

ProfileCardSlider.propTypes = {}

export default ProfileCardSlider
