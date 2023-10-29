import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

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
    const expenseData = {
        description: 'expense description',
        note: 'expense note',
        amount: 10,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should set up add expense action object with default values', () => {
    const action = addExpense({})
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})