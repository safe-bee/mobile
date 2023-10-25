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


export const CREATE_VARROA = gql`
  mutation CreateVarroa($colmenaId: ID!, $fecha: DateTime, $registroId: ID, $notas: String, $tipoMetodo: TipoMetodo, $porcentaje: Float) {
    createVarroa(colmenaId: $colmenaId, fecha: $fecha, registroId: $registroId, notas: $notas, tipoMetodo: $tipoMetodo, porcentaje: $porcentaje) {
      porcentaje
      registroId
      tipoMetodo
    }
  }
`;


export const CREATE_HIBERNACION = gql`
  mutation CreateHibernacion($colmenaId: ID!, $fecha: DateTime, $notas: String) {
    createHibernacion(colmenaId: $colmenaId, fecha: $fecha, notas: $notas) {
      colmenaId
      id
    }
  }
`;

export const CREATE_MUERTE = gql`
  mutation CreateMuerte($colmenaId: ID!, $fecha: DateTime, $notas: String) {
    createMuerte(colmenaId: $colmenaId, fecha: $fecha, notas: $notas) {
      colmenaId
      id
    }
  }
`;

export const CREATE_TRATAMIENTO = gql`
    mutation CreateTratamiento($colmenaId: ID!, $fecha: DateTime, $notas: String, $tipoPlaga: TipoPlaga, $producto: String, $dosis: String) {
      createTratamiento(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, tipoPlaga: $tipoPlaga, producto: $producto, dosis: $dosis) {
        dosis
        producto
      }
    }
`;

export const CREATE_CAMBIO_DE_CUADROS = gql`
  mutation CreateCambioDeCuadros($colmenaId: ID!, $fecha: DateTime, $notas: String, $cantidad: Int) {
    createCambioDeCuadros(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, cantidad: $cantidad) {
      cantidad
      registroId
    }
  }
`;

export const CREATE_ALIMENTACION = gql`
  mutation CreateAlimentacion($colmenaId: ID!, $fecha: DateTime, $notas: String, $alimento: String, $cantidadAlimentacion: Float) {
    createAlimentacion(colmenaId: $colmenaId, fecha: $fecha, notas: $notas, alimento: $alimento, cantidadAlimentacion: $cantidadAlimentacion) {
      alimento
      cantidadAlimentacion
    }
  }
`;
