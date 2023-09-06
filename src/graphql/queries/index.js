import { gql } from "@apollo/client";


export const GET_APIARIOS = gql`
  query Apiarios {
    apiarios {
      id,
      nombre,
      direccion,
      fecha_creacion,
      latitud,
      longitud,
      tipo_ambiente,
      colmenas {
        datos_numero_deeps,
        nombre
      }
    }
  }
`;


export const GET_APIARIO = gql`
  query Apiario($apiarioId: Int!) {
    apiario(id: $apiarioId) {
      nombre,
      id
    }
  }
`;
