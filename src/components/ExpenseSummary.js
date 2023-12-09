import React from 'react'
import expensesTotal from '../selectors/expenses-total'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'

const ExpenseSummary = (props) => (
    <div>
        <p>Viewing {props.expenses.length} expenses totalling {expensesTotal(props.expenses)}</p>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)