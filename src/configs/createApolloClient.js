import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = "http://localhost:4000/dev/graphql";

const httpLink = new HttpLink({
  uri: API_URL,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

export default client;