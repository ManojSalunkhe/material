import React from 'react';
import './App.css';
import routes from './routes/Routes';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRouting/PrivateRoute';
import { privatess } from './routes/Routes';
import Drawers from './react-hool-form/Drawers';

function App(props) {

  return (
    <div >
      <BrowserRouter>
        {
          routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={index}
              />
            )
          })
        }
        {
          privatess.map((route, index) => {
            return (
              <PrivateRoute
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={index}
              />
            )
          })
        }
        {
          privatess.map((route) =>
            route.childComponents
              ? route.childComponents.map((childRoute, index) => (
                <PrivateRoute
                  path={childRoute.path}
                  exact={childRoute.exact}
                  component={childRoute.component}
                  key={childRoute.name}
                />
              ))
              : null
          )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
