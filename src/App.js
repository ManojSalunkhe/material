import React from "react";
import "./App.css";
import routes from "./routes/Routes";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        {routes.map((route, index) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={index}
            />
          );
        })}
        {routes.map((route) =>
          route.childComponents
            ? route.childComponents.map((childRoute, index) => (
                <Route
                  path={childRoute.path}
                  exact={childRoute.exact}
                  component={childRoute.component}
                  key={index}
                />
              ))
            : null
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
