import { gql } from "@apollo/client";


export const DELETE_TAREA = gql`
    mutation DeleteTarea($deleteTareaId: Int!) {
        deleteTarea(id: $deleteTareaId) {
        colmenaId
        id
      }
    }
`;
