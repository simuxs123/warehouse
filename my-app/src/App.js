import React from 'react';
import {List} from './components/List';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Preview} from './components/Preview';
import {New} from './components/New';
import {Edit} from './components/Edit';
import {GlobalProvider} from "./context/GlobalState"
 
function App() {
  
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route path="/products/create" component={New}/>
          <Route path="/products/edit/:id" component={Edit}/>
          <Route path="/products/:id" component={Preview}/>
        </Switch>
      </Router>   
    </GlobalProvider>   
  );
}

export default App;
