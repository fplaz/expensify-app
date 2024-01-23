import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'
import { useNavigate } from 'react-router-dom'

const AddExpensePage = ({ onSubmit }) => {
    const navigate = useNavigate();
  
    const handleOnSubmit = (expense) => {
      onSubmit(expense);
      navigate('/dashboard');
    };
  
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={handleOnSubmit} />
      </div>
    );
  };
  
  const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => {
      dispatch(startAddExpense(expense));
    },
  });
  
  export default connect(undefined, mapDispatchToProps)(AddExpensePage);