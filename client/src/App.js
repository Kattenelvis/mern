import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";

import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/ItemModal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <ShoppingList />
        <Container>
          <ItemModal />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
