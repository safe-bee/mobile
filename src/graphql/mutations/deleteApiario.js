import { gql } from "@apollo/client";


export const DELETE_APIARIO = gql`
    mutation DeleteApiario($deleteApiarioId: Int!) {
        deleteApiario(id: $deleteApiarioId) {
            id
      }
    }
`;
