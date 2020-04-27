import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainView from "./MainView";
import GlobalStyle from "../theme/GlobalStyle";
import RecipeCategoryView from "./RecipeCategoryView";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import store from "../store";
import MyWeekView from "./MyWeekView";
import KitchenCheatSheetView from "./KitchenCheatSheetView";
import ShoppingListView from "./ShoppingListView";
import Footer from "../components/Footer";

function Root() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route path="/category" component={RecipeCategoryView} />
          <Route path="/myWeek" component={MyWeekView} />
          <Route path="/shoppingList" component={ShoppingListView} />
          <Route path="/kitchenCheatSheet" component={KitchenCheatSheetView} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
