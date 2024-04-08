
export const useApplicationData = () => {

  function returnHome() {
    // Using the fetch API to make a GET request to the specified endpoint
    fetch("http://localhost:3000/")
      .then((res) => {
        // Checking if the response status is OK (200)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Parsing the response body as JSON
        return res.json();
      })
  }

  function fetchLogin() {
    // Using the fetch API to make a GET request to the specified endpoint
    return fetch("http://localhost:3000/login")
      .then((res) => {
        // Checking if the response status is OK (200)
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Parsing the response body as JSON and returning the parsed data
        return res.json();
      });
  }
  return {
    returnHome,
    fetchLogin
  };
};