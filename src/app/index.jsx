import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Homepage from "./pages/homepage";
import AboutUsPage from "./pages/about-us";
import ProductsPage from "./pages/products";

export default function App() {
  return (
    <BrowserRouter>
      <Layout className="container">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/about-us">
            <AboutUsPage />
          </Route>

          <Route path="/products">
            <ProductsPage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
