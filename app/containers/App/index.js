import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../HomePage/Loadable'
import NotFoundPage from '../NotFoundPage/Loadable'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
