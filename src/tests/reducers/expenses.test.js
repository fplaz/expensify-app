import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense from default state', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    }
    const state = expensesReducer(undefined, action)
    expect(state).toEqual([expenses[0]])
})

test('should add an expense when there are other expenses', () => {
    const expense = {
        id: 100,
        amount: 10,
        description: 'Another',
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'Candy'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toEqual('Candy')
})

test('should not edit an expense when not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Candy'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})