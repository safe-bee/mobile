import { gql } from "@apollo/client";


export const GET_APIARIOS = gql`
  query apiarios {
    apiarios {
        id
        name
    }
  }
`;
