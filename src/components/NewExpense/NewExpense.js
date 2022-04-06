import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isFormOpen, setFormOpen] = useState(false);

  const openExpenseForm = () => {
    setFormOpen(true);
  };

  const closeExpenseForm = () => {
    setFormOpen(false);
  };

  let expenseFormOpen;

  if (isFormOpen) {
    expenseFormOpen = (
      <ExpenseForm
        closeExpenseForm={closeExpenseForm}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return (
    <div className="new-expense">
      <button onClick={openExpenseForm}>Add Expense</button>
      {expenseFormOpen}
    </div>
  );
};

export default NewExpense;
