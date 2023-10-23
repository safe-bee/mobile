import { gql } from "@apollo/client";


export const DELETE_COLMENA = gql`
    mutation DeleteColmena($deleteColmenaId: Int!) {
        deleteColmena(id: $deleteColmenaId) {
            id
      }
    }
`;
