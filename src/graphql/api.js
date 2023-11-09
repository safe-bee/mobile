
const API_URL = "https://di18zlis8e.execute-api.us-east-1.amazonaws.com/";

const executeQuery = async (query, variables) => {
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        console.log("RESPONSE QUERY");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
};


/*
  useEffect(() => {
    const testQuery = async () => {
      const data = await executeQuery(GET_COLMENA, { id });
      console.log("data");
      console.log(data);
    };

    testQuery();
  }, []);

*/

export default executeQuery;