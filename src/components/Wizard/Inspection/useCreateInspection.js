import { useEffect } from 'react';
import useForm from '../../../hooks/useForm';
import { CREATE_COLMENAS } from '../../../graphql/mutations/createColmenas';
import { useMutation } from "@apollo/client";
import { CREATE_INSPECCION } from '../../../graphql/mutations/createInspeccion';
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useSnackbar } from '../../../context/SnackbarContext';
import useGetApiariosPorColmenas from '../../../hooks/useGetApariosPorColmenas'

const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};

const temperatureValidation = {
    type: "temperature",
    errorMessage: "Tempertura fuera del rango de -40° y 50° grados."
};



export const useCreateInspection = () => {

const [createInspeccion, { loading }] = useMutation(CREATE_INSPECCION);


const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const {
    apiarios,
    colmenasXApiario
  } = useGetApiariosPorColmenas();

const inputFields = {
    clima: {
        value: '',
        validations: [],
    },
    temperatura: {
        value: '',
        validations: [temperatureValidation],
    },
    dateInspection: {
        value: new Date(),
        validations: [requiredValidation],
    },
    estadoCajon: {
        value: true,
        validations: [],
    },
    sellado: {
        value: '',
        validations: [],
    },
    invasores: {
        value: '',
        validations: [],
    },
    detallePoblacionFaltaEspacio: {
        value: '',
        validations: [],
    },
    detallePoblacionEstado: {
        value: '',
        validations: [],
    },
    detallePoblacionNumCuadros: {
        value: '',
        validations: [],
    },
    detalleReinaLarvasQueSeVe: {
        value: '',
        validations: [],
    },
    detalleReinaLarvasPatronDeCria: {
        value: '',
        validations: [],
    },
    detalleFloraEstado: {
        value: '',
        validations: [],
    },
    detalleFloraDispRecursos: {
        value: '',
        validations: [],
    },
    detalleAlimentoEstado: {
        value: '',
        validations: [],
    },
    detalleAlimentoDispRecursos: {
        value: '',
        validations: [],
    },
    detallePlagasTemperamentoAbejas: {
        value: '',
        validations: [],
    },
    detallePlagasPlagas: {
        value: '',
        validations: [],
    },
    apiario: {
        value: apiarios[0].value,
        validations: [requiredValidation],
     },
     colmena: {
         value: colmenasXApiario[0].colmenas[0].value,
         validations: [requiredValidation],
    },
    estadoPoblacion: {
        value: true,
        validations: [],
    },
    estadoReina: {
        value: true,
        validations: [],
    },
    estadoFloraCircundante: {
        value: true,
        validations: [],
    },
    estadoAlimento: {
        value: true,
        validations: [],
    },
    estadoPlagas: {
        value: true,
        validations: [],
    },
};



const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (formValues) => {
        
        const variables = {
            colmenaId: typeof(formValues.colmena.value) === 'object' ? formValues.colmena.value.value : formValues.colmena.value,
            fecha: formValues.dateInspection.value.toISOString(),
            estadoCajon: formValues.estadoCajon.value,
            estadoReinaLarvas: formValues.estadoReina.value,
            estadoPoblacion: formValues.estadoPoblacion.value,
            estadoFlora: formValues.estadoFloraCircundante.value,
            estadoPlagas: formValues.estadoPlagas.value,
            estadoAlimento: formValues.estadoAlimento.value,
            temperatura: formValues.temperatura && formValues.temperatura.value !== "" ? parseFloat(formValues.temperatura.value) : undefined,
            clima: formValues.clima && formValues.clima.value !== "" ? formValues.clima.value : undefined,
            detalleCajonSellado: formValues.sellado && formValues.sellado.value !== "" ? formValues.sellado.value : undefined,
            detalleCajonInvasores: formValues.invasores && formValues.invasores.value !== "" ? formValues.invasores.value : undefined,
            detallePoblacionEstado: formValues.detallePoblacionEstado && formValues.detallePoblacionEstado.value !== "" ? formValues.detallePoblacionEstado.value : undefined,
            detallePoblacionNumCuadros: formValues.detallePoblacionNumCuadros && formValues.detallePoblacionNumCuadros.value !== "" ? formValues.detallePoblacionNumCuadros.value : undefined,
            detallePoblacionFaltaEspacio: formValues.detallePoblacionFaltaEspacio && formValues.detallePoblacionFaltaEspacio.value !== "" ? formValues.detallePoblacionFaltaEspacio.value : undefined,
            detalleReinaLarvasQueSeVe: formValues.detalleReinaLarvasQueSeVe && formValues.detalleReinaLarvasQueSeVe.value !== "" ? formValues.detalleReinaLarvasQueSeVe.value : undefined,
            detalleReinaLarvasPatronDeCria: formValues.detalleReinaLarvasPatronDeCria && formValues.detalleReinaLarvasPatronDeCria.value !== "" ? formValues.detalleReinaLarvasPatronDeCria.value : undefined,
            detalleFloraEstado: formValues.detalleFloraEstado && formValues.detalleFloraEstado.value !== "" ? formValues.detalleFloraEstado.value : undefined,
            detalleFloraDispRecursos: formValues.detalleFloraDispRecursos && formValues.detalleFloraDispRecursos.value !== "" ? formValues.detalleFloraDispRecursos.value : undefined,
            detalleAlimentoEstado: formValues.detalleAlimentoEstado && formValues.detalleAlimentoEstado.value !== "" ? formValues.detalleAlimentoEstado.value : undefined,
            detalleAlimentoDispRecursos: formValues.detalleAlimentoDispRecursos && formValues.detalleAlimentoDispRecursos.value !== "" ? formValues.detalleAlimentoDispRecursos.value : undefined,
            detallePlagasPlagas: formValues.detallePlagasPlagas && formValues.detallePlagasPlagas.value !== "" ? formValues.detallePlagasPlagas.value : undefined,
            detallePlagasTemperamentoAbejas: formValues.detallePlagasTemperamentoAbejas && formValues.detallePlagasTemperamentoAbejas.value !== "" ? formValues.detallePlagasTemperamentoAbejas.value : undefined
        };

        const cleanedVariables = Object.fromEntries(Object.entries(variables).filter(([_, v]) => v !== undefined));

        console.log(cleanedVariables);
        try {

            const res = await createInspeccion({ variables: cleanedVariables });
            navigation.navigate(ROUTES.HOME);
            
            if (!res.data.errors) {
                showSnackbar("La inspeccion se creo correctamente!", "", "success");
            } else {
                showSnackbar("Ha habido un error!", "", "error");
            }
        } catch (e) {
            console.log(e);
        }
        
        
    }
  );

  const colmenasDelApiarioSeleccionado = colmenasXApiario.find(item => item.id === fields?.apiario.value)?.colmenas;


  useEffect(() => {
    if (fields?.apiario.value) {
        updateField({ name: "colmena", value: colmenasDelApiarioSeleccionado[0] })
    }
  }, [fields?.apiario.value]);



  return {
      fields,
      updateField,
      onSubmit,
      isVisitedForm,
      apiarios,
      colmenas: colmenasDelApiarioSeleccionado,
      mutationLoading: loading
  }
}


export default useCreateInspection;