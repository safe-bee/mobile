
const API_URL = "http://localhost:4000/dev/graphql";

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


export default executeQuery;