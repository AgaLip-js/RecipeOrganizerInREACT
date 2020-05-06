import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainView from "./MainView";
import GlobalStyle from "../theme/GlobalStyle";
import Navbar from "../components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../store";
import MyWeekView from "./MyWeekView";
import ShoppingListView from "./ShoppingListView";
import Footer from "../components/Footer/Footer";
import RecipeView from "./RecipeView";

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/recipes" component={RecipeView} />
          <Route exact path="/myWeek" component={MyWeekView} />
          <Route exact path="/shoppingList" component={ShoppingListView} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
