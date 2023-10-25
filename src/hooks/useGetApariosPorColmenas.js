
import { useQuery } from "@apollo/client";
import { GET_APIARIOS } from '../graphql/queries/index';

const useGetApiariosPorColmenas = () => {

    const { data, loading } = useQuery(GET_APIARIOS, { fetchPolicy: "cache-and-network" });

    const apiarios = data?.apiarios.map(apiario => ({ value: apiario.id, label: apiario.nombre }));

    const colmenasXApiario = data?.apiarios.map(apiario => ({ id: apiario.id, colmenas: apiario.colmenas.map(colmena => ({ label: colmena.nombre, value: colmena.id })) }));

    return {
        apiarios,
        colmenasXApiario,
    }
}


export default useGetApiariosPorColmenas;