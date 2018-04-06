import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import {
  Container,
  Main,
} from '../../globals/components'
import Header from '../Header'
import PieChar from '../PieChart'

const HomePage = () => (
  <Container>
    <Header />
    <Main>
      <div className="container-fluid">
        <PieChar />
      </div>
    </Main>
  </Container>
)

export default HomePage
