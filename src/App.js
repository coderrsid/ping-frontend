import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import NoMatch from './components/NoMatch'

class App extends Component {
  render() { 
    return (
      <Router>
          <Switch>
             <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
      </Router>
    )
  }
}

export default App
