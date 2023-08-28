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
