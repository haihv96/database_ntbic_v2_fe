import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import NotFoundPage from '../NotFoundPage/Loadable'
import SearchPages from '../SearchPages'
import { Container } from '../../globals/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => (
  <Container>
    <Navigation />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/search" component={SearchPages} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </Container>
)

export default App
