import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseItem from "./components/ExpenseItem";
import "./app.css";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">BudgetPrep</h1>
      <p>budg·et</p>
      <p>
        1. an estimate of income and expenditure for a set period of time. "keep
        within the household budget"
        <br></br>
        2. ARCHAIC a quantity of material, typically that which is written or
        printed
      </p>
      <h2>Start prepping your budget now!</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget /> {/*Component Budget */}
        </div>
        <div className="col-sm">
          <Remaining /> {/*Component Remaining*/}
        </div>
        <div className="col-sm">
          <ExpenseTotal /> {/*Component ExpenseTotal */}
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default App;
