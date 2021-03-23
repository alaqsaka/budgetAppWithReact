import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    {
      id: 1,
      name: "Shopping",
      cost: 50000,
    },
    {
      id: 2,
      name: "Books",
      cost: 99000,
    },
    {
      id: 3,
      name: "Coffee",
      cost: 18000,
    },
    {
      id: 4,
      name: "Nasik Kulit Syurgaa",
      cost: 20000,
    },
    {
      id: 5,
      name: "Coffee 2",
      cost: 20000,
    },
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
