import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Completed from "./components/Completed";
import ProductPage from "./components/ProductPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route
            exact
            path="/product/:id"
            render={routeProps => (
              <ProductPage name={routeProps.match.params.id} />
            )}
          />
          <Route exact path="/cart" component={Cart} />

          <Route exact path="/completed" component={Completed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
