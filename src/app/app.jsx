import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Homepage from "./pages/homepage/homepage";
import AboutUsPage from "./pages/about-us/about";

export default function App() {
  return (
    <Layout className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/about-us">
            <AboutUsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}
