import { gql } from "@apollo/client";


export const CREATE_COSECHA = gql`
  mutation CreateTarea($colmenaId: ID!, $tipoUnidad: TipoUnidad, $cantidadCosecha: Float) {
    createCosecha(colmenaId: $colmenaId, tipoUnidad: $tipoUnidad, cantidadCosecha: $cantidadCosecha) {
        cantidadCosecha
        registroId
        tipoUnidad
    }
  }
`;
