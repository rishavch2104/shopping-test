import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartPage from "./components/cart/CartPage";
import Completed from "./components/Completed";
import ProductPage from "./components/ProductPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route
            exact
            path="/product/:id"
            render={routeProps => (
              <ProductPage id={routeProps.match.params.id} />
            )}
          />
          <Route exact path="/cart" component={CartPage} />

          <Route exact path="/completed" component={Completed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
