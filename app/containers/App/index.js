import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../HomePage/Loadable'
import NotFoundPage from '../NotFoundPage/Loadable'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
