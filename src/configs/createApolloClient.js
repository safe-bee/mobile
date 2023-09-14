import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";

const API_URL = "https://di18zlis8e.execute-api.us-east-1.amazonaws.com/";

const httpLink = new HttpLink({
  uri: API_URL,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

export default client;