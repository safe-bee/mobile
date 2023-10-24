import { gql } from "@apollo/client";


export const CREATE_TAREA = gql`
  mutation CreateTarea(
    $descripcion: String!
    $colmenaId: Int!
    $fecha: DateTime, 
    $tipoRegistro: TipoRegistro!
  ) {
    createTarea(
      descripcion: $descripcion
      colmenaId: $colmenaId
      fecha: $fecha
      tipoRegistro: $tipoRegistro
    ) {
      colmenaId
      descripcion
      fecha
      tipoRegistro
    }
  } 
`;
