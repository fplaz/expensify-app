import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'
import { useNavigate } from 'react-router-dom'


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        
        this.props.onSubmit(expense)
        //this.props.navigate('/')
    }
    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit ={this.onSubmit} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => {dispatch(startAddExpense(expense))}
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)