import { configureStore } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// ADD EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
})

// REMOVE EXPENSE
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}

const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        filters: filtersReducer
    }
})

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'rent', amount: 100}))
store.dispatch(removeExpense(expenseOne.expense.id))
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())

// const demoState = {
//     expenses: [{
//         id: 'jkansalmsa',
//         description: 'january rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //Date or amount
//         startDate: undefined,
//         endDate: undefined,
//     }
// }