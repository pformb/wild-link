import { useReducer, useEffect, useRef } from "react";

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


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

  return {
    returnHome,

  };
};