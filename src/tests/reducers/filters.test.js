import filtersReducer from "../../reducers/filters"
import moment from "moment"

test('Should set up default filters values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', () => {
    const text = 'This is my filter'
    const action = {
        text,
        type: 'SET_TEXT_FILTER'
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})

test('Should set start date filter', () => {
    const startDate = moment(0)
    const action = {
        startDate,
        type: 'SET_START_DATE'
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(startDate)
})

test('Should set end date filter', () => {
    const endDate = moment(0)
    const action = {
        endDate,
        type: 'SET_END_DATE'
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(endDate)
})