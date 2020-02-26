import React from 'react';
import NavMenu from "./NavMenu";
import {Route, Switch} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {
  return (
    <div className='App'>
      <NavMenu/>
      <Switch>
        <Route exact path="/" component={Page1}/>
        <Route exact path="/page1" component={Page1}/>
        <Route exact path="/page2" component={Page2}/>
        <Route exact path="/page3" component={Page3}/>
      </Switch>
    </div>
  );
}

export default App;
