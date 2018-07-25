import React from 'react'
import { Switch, Route } from 'react-router-dom'
import table from './Table';
import Form from './Form';


const paths = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Form}/>
      <Route exact path='/table' component={table}/>
    </Switch>
  </main>
)

export default paths;