import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Navbar from './components/layout/Navbar/Navbar'
import HomePage from './components/layout/HomePage/HomePage'

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <div className={'container'}>
          <Switch>
            <Route exact path={'/'}>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
