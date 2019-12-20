import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Completed from "./components/Completed";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/completed">
            <Completed />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
