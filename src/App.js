import React from 'react';
import { Route, Switch} from "react-router-dom";
import Dashboard from './pages/dashboard.pages';
import { ProductPage } from './pages/product.pages';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={`/`} component={Dashboard} />
        <Route exact path={`/products`} component={ProductPage} />
      </Switch>
    </div>
  );
}

export default App;
