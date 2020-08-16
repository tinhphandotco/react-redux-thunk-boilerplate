import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/home';
import NotFound from 'components/ui/NotFound';

function Root() {
  return (
    <div>
      {/* Routes */}
      <Switch>
        <Route exact path="/app" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Root;
