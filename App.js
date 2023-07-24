import React from 'react';
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./src/configs/createApolloClient";
import Routes from './src/routes'
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </ApolloProvider>
  );
}
