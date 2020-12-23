import React from 'react'
import {Route} from 'react-router'
import App from './App'
import Debate from './Pages/Debate'

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/debate" component={Debate}/>
    </div>
  )
}

export default Routes