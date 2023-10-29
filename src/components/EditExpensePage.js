import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { useNavigate, useParams } from 'react-router-dom'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    navigate('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense(props.expense.id))
                navigate('/')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    const params = {id: window.location.pathname.split("/")[2]}
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)