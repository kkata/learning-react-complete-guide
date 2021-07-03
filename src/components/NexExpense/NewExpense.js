import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormVisible(!isFormVisible);
  };
  const toggleNewExpenseForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const newExpenseContent = isFormVisible ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={toggleNewExpenseForm}
    />
  ) : (
    <button onClick={toggleNewExpenseForm}>Add New Expense</button>
  );

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
