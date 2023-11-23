import { gql } from "@apollo/client";


export const CREATE_APIARIOS = gql`
  mutation CreateApiario(
    $nombre: String!
    $latitud: Float!
    $longitud: Float!
    $direccion: String!
    $tipo_ambiente: TipoAmbiente!
    $fecha_creacion: DateTime!
    $usuarioId: Int!
  ) {
    createApiario(
      nombre: $nombre
      latitud: $latitud
      longitud: $longitud
      direccion: $direccion
      tipo_ambiente: $tipo_ambiente
      fecha_creacion: $fecha_creacion
      usuarioId: $usuarioId
    ) {
      id
      nombre
      latitud
      longitud
      direccion
      tipo_ambiente
    }
  } 
`;
