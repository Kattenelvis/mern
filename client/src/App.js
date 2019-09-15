import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";

// import { Provider } from "react-redux";
// import store from "./redux tutorial/store";

function App() {
  return (
    // <Provider store={store}>
    <div>
      <AppNavbar />
      <ShoppingList />
      <h1>GOOD MORNING VIETNAM</h1>
    </div>
    // </Provider>
  );
}

export default App;
