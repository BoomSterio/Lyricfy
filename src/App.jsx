import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Navbar from './components/layout/Navbar/Navbar'
import Index from './components/layout/Index/Index'
import Lyrics from './components/tracks/Lyrics/Lyrics'

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <div className={'container'}>
          <Switch>
            <Route exact path={'/'} component={Index}/>
            <Route path={'/lyrics/track/:trackId'} component={Lyrics}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
