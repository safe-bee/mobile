import { gql } from "@apollo/client";

export const SIGN_IN_MUTATION = gql`
    mutation SignIn($nombreUsuario: String!, $contrasena: String!) {
        signIn(nombreUsuario: $nombreUsuario, contrasena: $contrasena) {
            usuario {
                correoElectronico
                nombreUsuario
                usuarioId
                token
            }
        }
    } 
`;

