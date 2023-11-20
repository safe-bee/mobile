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
      id,
      fecha_creacion
      latitud
      longitud
      direccion
      tipo_ambiente
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


export const GET_REGISTROS =  gql`
  query HistorialRegistros($colmenaId: Int!) {
    registros (colmenaId: $colmenaId) {
      monthYear
      registros {
        id
        fecha
        colmenaId
        tipoRegistro
        notas
        detalles {
          header
          value
        }
      }
    }
  }
`;



export const GET_TAREAS_PENDIENTES =  gql`
  query TareasPendientesPorColmenaYTipo(
    $colmenaId: Int!, 
    $tipoRegistro: TipoRegistro!
   ) {
    tareasPendientesPorColmenaYTipo(colmenaId: $colmenaId, tipoRegistro: $tipoRegistro) {
      colmenaId,
      fecha,
      id
    }
  }
`;


export const GET_INSPECCION =  gql`
  query Inspeccion($inspeccionId: Int!) {
    inspeccion(id: $inspeccionId) {
      registroId
      clima
      temperatura
      estadoCajon
      detalleCajonSellado
      detalleCajonInvasores
      estadoPoblacion
      detallePoblacionEstado
      detallePoblacionNumCuadros
      detallePoblacionFaltaEspacio
      estadoReinaLarvas
      detalleReinaLarvasQueSeVe
      detalleReinaLarvasPatronDeCria
      estadoFlora
      detalleFloraEstado
      detalleFloraDispRecursos
      estadoAlimento
      detalleAlimentoEstado
      detalleAlimentoDispRecursos
      estadoPlagas
      detallePlagasPlagas
      detallePlagasTemperamentoAbejas
      fotoInspeccion
    }
  }
`;



