import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PokemonContainer } from "./containers/PokemonsContainer";

const App: React.FC = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-pokemon2.vercel.app/",
  });

  return (
    <ApolloProvider client={client}>
      <PokemonContainer />
    </ApolloProvider>
  );
};

export default App;
