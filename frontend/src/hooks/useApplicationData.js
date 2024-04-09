import { useEffect, useReducer } from 'react';

const initialState = {
  orgData: [],
};

const ACTIONS = {
  SET_ORG_DATA: "SET_ORG_DATA",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ORG_DATA:
      return { ...state, orgData: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:3001/api/organizations")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_ORG_DATA, payload: data });
      });
  }, []);

  return state; 
};

