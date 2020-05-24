import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useOnClickOutside } from "../hooks";
import MainView from "./MainView";
import GlobalStyle from "../theme/GlobalStyle";
import Navbar from "../components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../store";
import MyWeekView from "./MyWeekView";
import ShoppingListView from "./ShoppingListView";
import Footer from "../components/Footer/Footer";
import RecipeView from "./RecipeView";
import Burger from "../components/atoms/Burger/Burger";
import Menu from "../components/MenuBurger/MenuBurger";

function Root() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Switch>
          <Route exact path="/recipe" component={MainView} />
          <Route exact path="/recipe/recipes" component={RecipeView} />
          <Route exact path="/recipe/myWeek" component={MyWeekView} />
          <Route exact path="/recipe/shoppingList" component={ShoppingListView} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
