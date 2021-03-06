import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Goals from './components/Goals'

const App = () => {
  return (
    <div className="App">

      <BrowserRouter >
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/goals">
          <Goals />
        </Route>


        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
