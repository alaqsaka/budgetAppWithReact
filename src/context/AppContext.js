import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state, // copying the existing state
        expenses: [...state.expenses, action.payload], // overwrite that with a new expenses object
        // Current what's in the array // will be added to last item of the array
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

{
  /* Ini nilai awal saat pertama kali progam di-start  */
}
const initialState = {
  budget: 200000,
  expenses: [
    { id: 12, name: "Shopping", cost: 50000 },
    { id: 13, name: "Food", cost: 50000 },
    { id: 14, name: "Education", cost: 50000 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
