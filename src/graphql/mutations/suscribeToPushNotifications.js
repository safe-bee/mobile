import { gql } from "@apollo/client";


export const SUBSCRIBE_TO_PUSH_NOTIFICATIONS = gql`
    mutation SuscribeToPushNotification($usuarioId: Int!, $token: String!) {
        suscribeToPushNotification(usuarioId: $usuarioId, token: $token) {
            usuario {
                usuarioId
                nombreUsuario
                correoElectronico
                token
            }
        }
    }
`;

