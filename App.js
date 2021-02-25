import React from "react";
//router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
//style
import "./styles/App.scss";
//components
import Table from "./components/contacts/Table";
import Navbar from "./components/elements/Navbar";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Table} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
