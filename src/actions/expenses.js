import { v4 as uuidv4 } from 'uuid'
import db from '../firebase/firebase'
import { ref, set, push, child } from 'firebase/database';


// ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return async (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        
        const expense = {description, note, amount, createdAt}
        
        const expenseRef = child(ref(db), 'expenses')
        const newExpenseRef = push(expenseRef)
        
        try {
            await set(newExpenseRef, expense)
            return dispatch(addExpense({
                id: newExpenseRef.key,
                ...expense
            }))
        } catch(e) {
            console.log(e)
        }
    }
}

// REMOVE EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})