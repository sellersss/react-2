import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import SnacksMenu from "./FoodMenu";
import DrinksMenu from "./FoodMenu";
import Snack from "./FoodItem";
import Drink from "./FoodItem";
import NewFoodForm from "./NewFoodForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // load snacks during app render
  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  // load drinks during app render
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  // make id from item name
  const create = (name) => {
    return name.toLowerCase().replaceAll(" ", "-");
  }

  // add food item to API
  const add = async (item, category) => {
    await SnackOrBoozeApi.addItem(item, category);
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <SnacksMenu items={snacks} itemType="snacks" />
            </Route>
            <Route exact path="/drinks">
              <DrinksMenu items={drinks} itemType="drinks" />
            </Route>
            <Route exact path="/add">
              <NewFoodForm createId={create} addFoodItem={add} />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Drink items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
