import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";

import { resolvers, typeDefs } from "./graphql/resolvers";
import { default as data } from "./graphql/initial-data";

import { default as App } from "./App/App.container.jsx";
import "./index.css";

const httpLink = createHttpLink({
  uri: "https://www.crwn-clothing.com", // where endpoint /graphql is
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({ data });

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
