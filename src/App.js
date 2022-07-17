import React from "react";
import styles from "./App.module.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryClient } from "@apollo/client";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Auth from "./components/Auth";
import { MainPage } from "./components/MainPage";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  headers: {
    authorization: localStorage.getItem("token")
      ? `JWT ${localStorage.getItem("token")}`
      : "",
  },
  cache: new InMemoryClient(),
});

function App() {
  return (
    <ApolloClient client={client}>
      <div className={styles.app}>
        <BrowserRouter>
          <switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/employees" component={MainPage} />
          </switch>
        </BrowserRouter>
      </div>
    </ApolloClient>
  );
}

export default App;
