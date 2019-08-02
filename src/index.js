import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ecommerceApp from "./reducers";

import "./index.css";
import App from "./components/App.js";
import * as serviceWorker from "./serviceWorker";

import Home from "./pages/home/Home";
import ConnectedProductDetails from "./pages/product-details/ProductDetails";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(ecommerceApp, composeEnhancers(applyMiddleware(thunk)))}
  >
    <Router>
      <App>
        <Switch>
          <Route
            path="/product-detail/:id"
            component={ConnectedProductDetails}
          />
          <Route path="/" exact component={Home} />
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
