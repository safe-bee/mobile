import { useEffect } from 'react';
import useForm from '../../../hooks/useForm';
import usePrevious from '../../../hooks/usePrevious';
import { CREATE_APIARIOS } from '../../../graphql/mutations/createApiarios';
import { GET_APIARIOS } from '../../../graphql/queries/index';
import executeQuery from '../../../graphql/api';
import { ROUTES } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from "@apollo/client";
import { useSnackbar } from '../../../context/SnackbarContext';

export const LATITUD_DELTA = 0.05;
export const LONGITUD_DELTA = 0.05;

export const BUENOS_AIRES_COORD = {
    "latitude": -34.6038188,
    "latitudeDelta": LATITUD_DELTA,
    "longitude": -58.3793510,
    "longitudeDelta": LONGITUD_DELTA
};

export const AV_CORRIENTES_COORD = {
    "latitude": -34.60381877255421, 
    "latitudeDelta": LATITUD_DELTA,
    "longitude": -58.379350751638405,
    "longitudeDelta": LONGITUD_DELTA
};


const requiredValidation = {
    type: "required",
    errorMessage: "El campo es requerido."
};


export const useCreateApiary = ({ initFields, usuarioId } ) => {

 const [createApiarios, { loading }] = useMutation(CREATE_APIARIOS, {
    refetchQueries: [{ query: GET_APIARIOS,  variables: { usuarioId } }],
 })

const { showSnackbar } = useSnackbar();

const navigation = useNavigation();

const apiaryName = initFields?.apiaryName;
const dateTask = initFields?.dateTask;
const environment = initFields?.environment;
const address = initFields?.environment;
const region = initFields?.region;



const inputFields = {
    apiaryName: {
        value: apiaryName ||'',
        validations: [requiredValidation],
    },
    dateTask: {
        value: dateTask ? new Date(dateTask) : new Date(),
        validations: [],
    },
    environment: {
        value: environment ? environment.toLowerCase() : '',
        validations: [requiredValidation],
    },
    address: {
        value: address || '',//'Palermo, Buenos Aires, Argentina', //address || 'Palermo, Buenos Aires, Argentina',
        validations: [],
    },
    region: {
        value: region || BUENOS_AIRES_COORD, // BUENOS_AIRES_COORD,// 
        validations: [],
    }
};


const { fields, updateField, onSubmit, isVisitedForm } = useForm(
    inputFields,
    async (formValues) => {

        const variables = {
            nombre: formValues.apiaryName.value,
            fecha_creacion: formValues.dateTask.value,
            tipo_ambiente: formValues.environment.value.toUpperCase(),
            direccion: formValues.address.value,
            latitud: formValues.region.value.latitude,
            longitud: formValues.region.value.longitude,
            usuarioId
        };

        console.log("variables");
        console.log(variables);

        try {
            const res = await createApiarios({ variables });
            navigation.navigate(ROUTES.HOME);
            
            if (!res.data.errors) {
                showSnackbar("El apiario se creo correctamente!", "", "success");
            } else {
                showSnackbar("Ha habido un error!", "", "error");
            }
        } catch (e) {
            console.log(e);
        }
    }
  );



    // the useEffect and usePrevious code area have to do with useForm creating the form while the query is still loading.
  // if not used like this, the profile form will render blank unless the user query is already cached.
  const prevApiaryName = usePrevious(apiaryName);
  const prevDateTask = usePrevious(dateTask);
  const prevEnvironment = usePrevious(environment);
  const prevAddress = usePrevious(address);
  const prevRegion = usePrevious(region);

  useEffect(() => {
    if (apiaryName && apiaryName !== prevApiaryName) {
      fields.apiaryName.setValue(apiaryName);
    }

    if (dateTask && dateTask !== prevDateTask) {
      fields.dateTask.setValue(new Date(initFields?.dateTask));
    }

    if (environment && environment !== prevEnvironment) {
      fields.environment.setValue(environment.toLowerCase());
    }

    if (address && address !== prevAddress) {
      fields.address.setValue(address);
    }
    
    if (
        region &&
        prevRegion &&
        region.latitude !== prevRegion.latitude &&
        region.longitude !== prevRegion.longitude
    ) {
      fields.region.setValue(region);
    }
  }, [apiaryName, dateTask, environment, address, region]);


  return {
      fields,
      updateField,
      onSubmit,
      isVisitedForm,
      mutationLoading: loading
  }
}


export default useCreateApiary;