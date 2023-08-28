import { gql } from "@apollo/client";


export const GET_APIARIOS = gql`
  query apiarios {
    apiarios {
      id,
      nombre,
      direccion,
      fecha_creacion,
      latitud,
      longitud,
      tipo_ambiente
    }
  }
`;
