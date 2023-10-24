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
        nombre,
        id
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


export const GET_COLMENA = gql`
  query Colmena($id: Int!) {
    colmena(id: $id) {
      apiarioId,
      tipo,
      datos_fecha_establecimiento
      datos_color,
      datos_origen,
      datos_total_cuadros,
      nombre,
      reina_color,
      reina_tipo,
      reina_notas,
      reina_fecha_aceptacion,
      tareas {
        id
        descripcion
        fecha
        colmenaId
        terminada
        tipoRegistro 
      }
    }
  }
`;
