import { useEffect } from 'react';
import { useLazyQuery } from "@apollo/client";
import { GET_TAREAS_PENDIENTES } from '../graphql/queries/index';
import { formatForPendingTasks } from '../utils/helpers';

const useGetTareasAsociadas = ({ tipoRegistro, colmenaId }) => {

    const [loadData, { loading, data: tareasPendientesData }] =  useLazyQuery(GET_TAREAS_PENDIENTES);
    
    
    useEffect(() => {
        if (colmenaId) {
            loadData({ variables: { colmenaId, tipoRegistro }})
        }
    }, [colmenaId]);


    const formatTareas = () => {
        let tareasPendientes;
        if (tareasPendientesData?.tareasPendientesPorColmenaYTipo?.length) {
            const capitaledTipoRegistro = tipoRegistro.charAt(0).toUpperCase() + tipoRegistro.slice(1).toLowerCase();
            tareasPendientes = tareasPendientesData?.tareasPendientesPorColmenaYTipo?.map((tareaPendiente) => {
                return { 
                    label:`${capitaledTipoRegistro} [${formatForPendingTasks(tareaPendiente.fecha)}]`,
                    value: tareaPendiente.id
                 };
            });
        }
        return tareasPendientes;
    };
    
    return {
        tareasAsociadas: formatTareas(),
    }
}


export default useGetTareasAsociadas;