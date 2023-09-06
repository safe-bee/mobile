import { gql } from "@apollo/client";


export const CREATE_COLMENAS = gql`
  mutation createColmena(
    $nombre: String!, 
    $apiarioId: Int!, 
    $tipo: TipoColmena!, 
    $datosNumeroDeeps: String, 
    $datosNumeroSupers: String, 
    $datosTotalCuadros: String, 
    $datosColor: String, 
    $datosOrigen: OrigenColmena, 
    $datosFechaEstablecimiento: DateTime, 
    $reinaTipo: TipoReina, 
    $reinaColor: ColorReina, 
    $reinaFechaAceptacion: DateTime, 
    $reinaNotas: String) {
    createColmena(
        nombre: $nombre, 
        apiarioId: $apiarioId, 
        tipo: $tipo, 
        datos_numero_deeps: $datosNumeroDeeps, 
        datos_numero_supers: $datosNumeroSupers, 
        datos_total_cuadros: $datosTotalCuadros, 
        datos_color: $datosColor, 
        datos_origen: $datosOrigen, 
        datos_fecha_establecimiento: $datosFechaEstablecimiento, 
        reina_tipo: $reinaTipo, 
        reina_color: $reinaColor, 
        reina_fecha_aceptacion: $reinaFechaAceptacion, 
        reina_notas: $reinaNotas
    ) {
        apiarioId,
        datos_color,
        datos_fecha_establecimiento,
        id,
        nombre,
        tipo
    }
  }
`;
