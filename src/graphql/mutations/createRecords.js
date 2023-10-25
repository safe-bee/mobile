import { gql } from "@apollo/client";


export const CREATE_COSECHA = gql`
  mutation CreateCosecha($colmenaId: ID!, $tipoUnidad: TipoUnidad, $cantidadCosecha: Float, $tareaId: Int) {
    createCosecha(colmenaId: $colmenaId, tipoUnidad: $tipoUnidad, cantidadCosecha: $cantidadCosecha, tareaId: $tareaId) {
        cantidadCosecha
        registroId
        tipoUnidad
    }
  }
`;


export const CREATE_VARROA = gql`
  mutation CreateVarroa($colmenaId: ID!, $fecha: DateTime, $registroId: ID, $notas: String, $tipoMetodo: TipoMetodo, $porcentaje: Float, $tareaId: Int) {
    createVarroa(colmenaId: $colmenaId, fecha: $fecha, registroId: $registroId, notas: $notas, tipoMetodo: $tipoMetodo, porcentaje: $porcentaje,  tareaId: $tareaId) {
      porcentaje
      registroId
      tipoMetodo
    }
  }
`;


export const CREATE_HIBERNACION = gql`
  mutation CreateHibernacion($colmenaId: ID!, $fecha: DateTime, $notas: String, $tareaId: Int) {
    createHibernacion(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, tareaId: $tareaId) {
      colmenaId
      id
    }
  }
`;

export const CREATE_MUERTE = gql`
  mutation CreateMuerte($colmenaId: ID!, $fecha: DateTime, $notas: String, $tareaId: Int) {
    createMuerte(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, tareaId: $tareaId) {
      colmenaId
      id
    }
  }
`;

export const CREATE_TRATAMIENTO = gql`
    mutation CreateTratamiento($colmenaId: ID!, $fecha: DateTime, $notas: String, $tipoPlaga: TipoPlaga, $producto: String, $dosis: String, $tareaId: Int) {
      createTratamiento(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, tipoPlaga: $tipoPlaga, producto: $producto, dosis: $dosis, tareaId: $tareaId) {
        dosis
        producto
      }
    }
`;

export const CREATE_CAMBIO_DE_CUADROS = gql`
  mutation CreateCambioDeCuadros($colmenaId: ID!, $fecha: DateTime, $notas: String, $cantidad: Int, $tareaId: Int) {
    createCambioDeCuadros(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, cantidad: $cantidad, tareaId: $tareaId) {
      cantidad
      registroId
    }
  }
`;

export const CREATE_ALIMENTACION = gql`
  mutation CreateAlimentacion($colmenaId: ID!, $fecha: DateTime, $notas: String, $alimento: String, $cantidadAlimentacion: Float, $tareaId: Int) {
    createAlimentacion(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, alimento: $alimento, cantidadAlimentacion: $cantidadAlimentacion, tareaId: $tareaId) {
      alimento
      cantidadAlimentacion
    }
  }
`;
