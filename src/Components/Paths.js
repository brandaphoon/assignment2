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
      <Route  path='/Dashboard' component={Dashboard}/>
      <Route  path='/Create' component={Form}/>
      <Route  path='/Assign' component={Assign}/>
      <Route  path='/table' component={table}/>
    </Switch>
  </main>
)

export default paths;