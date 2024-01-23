// import { v4 as uuidv4 } from 'uuid'
import db from '../firebase/firebase'
import { ref, set, push, child, get, remove, update } from 'firebase/database';

// ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        
        const expense = {description, note, amount, createdAt}
        
        const expenseRef = ref(db, 'users/'+ uid + '/expenses')
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

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const StartEditExpense = (id, updates) => {
    return async (dispatc, getStateh) => {
        const uid = getState().auth.uid
        try {
            const dbRef = ref(db, 'users/' + uid + '/expenses/' + id)
            const expense = await update(dbRef, updates)
            return dispatch(editExpense(id, updates))
        }
        catch {
            console.log('StartEditExpense error:' + e)
        }
    }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        try {
            const expenses = []
            const dbRef = ref(db, 'users/' + uid + '/expenses')
            const snapshot = await get(dbRef)
            snapshot.forEach((item) => {
                expenses.push({
                    id: item.key,
                    ...item.val()
                })
            })
            return dispatch(setExpenses(expenses))
        } catch(e) {
            console.log('StartSetExpenses error:' + e)
        }
    }
}

// REMOVE EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = (id) => {
    return async (dispatch, getState) => {
        
        const uid = getState().auth.uid
        const expenseRef = ref(db, '/users/' + uid + '/expenses/' + id)

        try {
            await set(expenseRef, null)
            return await dispatch(removeExpense({id}))
        } catch(e) {
            console.log(e)
        }
    }
}