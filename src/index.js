import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from './componenets/footer';
import PageWrapper from './componenets/wrapper';
import data from './data/data.json';

import 'bootstrap/dist/js/bootstrap.min.js';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          {Object.entries(data.pages).map(
            ([pageName, { slug }]) => (
              <Route key={pageName} exact path={slug}>
                <PageWrapper id={pageName} />
              </Route>
            )
          )}
        </Switch>
      </BrowserRouter>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);