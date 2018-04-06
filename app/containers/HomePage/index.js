import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import {
  Container,
  Main,
} from '../../globals/components'
import Navigation from '../../components/Navigation'
import SearchArea from '../../components/SearchArea'
import PieChar from '../PieChart'
import Footer from '../../components/Footer'

const HomePage = () => (
  <Container>
    <Navigation />
    <SearchArea />
    <Main>
      <PieChar />
    </Main>
    <Footer />
  </Container>
)

export default HomePage
