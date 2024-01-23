import {addExpense, editExpense, removeExpense, startAddExpense, setExpenses} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import db from '../../firebase/firebase'
import { ref, child, set } from "firebase/database";

const createMockStore = configureMockStore([thunk]) 

beforeEach(async () => {
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt}
    })
    const expensesRef = ref(db, 'expenses/')
    console.log(expensesData)
    await set(expensesRef, expensesData)
})

test('Should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        id: '123abc',
        type: 'REMOVE_EXPENSE'
    })
})

test('Should set up edit expense object', () => {
    const action = editExpense('123abc', {amount: 10, description: 'new description'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: 10,
            description: 'new description'
        }
    })
})

test('Should set up add expense action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[2],
            id: expect.any(String)
        }
    })
})

test('Should add expense to db and store', async () => {
    const store = createMockStore({})
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    await store.dispatch(startAddExpense(expenseData))
    const actions = await store.getActions()
    console.log(actions)
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})

// test('Should add expense with default values to db and store', () => {
    
// })

// test('Should set up add expense action object with default values', () => {
//     const action = addExpense({})
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// })

test('Should set up set exprense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})