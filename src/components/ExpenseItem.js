import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span class="badge badge-primary badge-pill mr-3">
          Rp.{props.cost}
          <TiDelete size="1.5em"></TiDelete>
        </span>
      </div>
    </li>
  );
};

export default ExpenseItem;