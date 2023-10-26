import { gql } from "@apollo/client";


export const DELETE_REGISTRO = gql`
  mutation DeleteRegistro($deleteRegistroId: Int!) {
    deleteRegistro(id: $deleteRegistroId) {
      id
      colmenaId
    }
  }
`;
