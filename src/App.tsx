import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GoogleSearch from './pages/GoogleSearch';
import NoInternet from './pages/NoInternet';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/search'} component={GoogleSearch} />
        <Route exact path={'/'} component={NoInternet} />
      </Switch>
    </Router>
  );
}

export default App;
