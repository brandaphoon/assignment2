import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Assign from './Assign/Assign';
import Form from './Create/Form';
import table from './Create/Table';


const paths = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
      <Route exact path='/Create' component={Form}/>
      <Route exact path='/Assign' component={Assign}/>
      <Route exact path='/table' component={table}/>
    </Switch>
  </main>
)

export default paths;