import useForm from '../../../hooks/useForm';
import useGetApariosPorColmenas from '../../../hooks/useGetApariosPorColmenas';
import { useEffect } from 'react';
import { CREATE_COSECHA } from '../../../graphql/mutations/createRecords';
import { useMutation } from "@apollo/client";
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useSnackbar } from '../../../context/SnackbarContext';

const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};

const tipoUnidades = [
    { value: 'LIBRAS', label: 'Libras' },
    { value: 'KILOS', label: 'Kilos' },
    { value: 'CUADROS', label: 'Cuadros' },
];


const useCreateHarvestHoney = () => {


const [createCosecha, { loading }] = useMutation(CREATE_COSECHA);

const {
    apiarios,
    colmenasXApiario
} = useGetApariosPorColmenas();


const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const inputFields = {
    fechaDeRegistro: {
        value: new Date(),
        validations: [requiredValidation],
    },
    apiario: {
       value: apiarios[0].value,
       validations: [requiredValidation],
    },
    colmena: {
        value: colmenasXApiario[0].colmenas[0].value,
        validations: [requiredValidation],
     },
     tipoUnidad: {
        value: tipoUnidades[0].value,
        validations: [requiredValidation],
    },
    cantidad: {
        value: '',
        validations: [],
    },
};

const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (formValues) => {

        const variables = {
            cantidadCosecha: parseFloat(formValues.cantidad.value),
            colmenaId: formValues.colmena.value,
            // fecha: formValues.fechaDeRegistro.value,
            tipoUnidad: formValues.tipoUnidad.value
        };
        
       try {
            const res = await createCosecha({ variables });
            navigation.navigate(ROUTES.HOME);
        
            if (!res.data.errors) {
                showSnackbar("El registro se creo correctamente!", "", "success");
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
      mutationLoading: loading,
      tipoUnidades,
      apiarios,
      colmenas: colmenasDelApiarioSeleccionado
  }
}


export default useCreateHarvestHoney;