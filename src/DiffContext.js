// DiffContext.js
import React, { createContext, useReducer, useEffect } from 'react';

const initialState = { diff: 2 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DIFF':
      return { ...state, diff: action.payload };
    default:
      return state;
  }
};

const DiffContext = createContext(initialState);

export const DiffProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem('diffState');
    if (savedState) {
      dispatch({ type: 'SET_DIFF', payload: JSON.parse(savedState).diff });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('diffState', JSON.stringify(state));
  }, [state]);

  return (
    <DiffContext.Provider value={{ state, dispatch }}>
      {children}
    </DiffContext.Provider>
  );
};

export default DiffContext;
