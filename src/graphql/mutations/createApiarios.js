import { gql } from "@apollo/client";


export const CREATE_APIARIOS = gql`
  mutation CreateApiario(
    $nombre: String!
    $latitud: Float!
    $longitud: Float!
    $direccion: String!
    $tipo_terreno: TipoTerreno!
    $tipo_ambiente: TipoAmbiente!
    $fecha_creacion: DateTime!
  ) {
    createApiario(
      nombre: $nombre
      latitud: $latitud
      longitud: $longitud
      direccion: $direccion
      tipo_terreno: $tipo_terreno
      tipo_ambiente: $tipo_ambiente
      fecha_creacion: $fecha_creacion
    ) {
      id
      nombre
      latitud
      longitud
      direccion
      tipo_terreno
      tipo_ambiente
    }
  } 
`;
