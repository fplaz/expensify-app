import expensesTotal from "../../selectors/expenses-total"
import expenses from '../fixtures/expenses'

test('Should return 0 for empty array', () => {
    const result = expensesTotal([])
    expect(result).toEqual(0)
})

test('Should correctly add up a single expense', () => {
    const result = expensesTotal([expenses[0]])
    expect(result).toEqual(expenses[0].amount)
})

test('Should correctly add up multiple expenses', () => {
    const result = expensesTotal(expenses)
    expect(result).toEqual(expenses[0].amount + expenses[1].amount + expenses[2].amount)
})