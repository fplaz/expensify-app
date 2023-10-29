import React from "react"
import { MemoryRouter } from 'react-router-dom'
import {render, screen} from '../../../test-utils'
import AddExpensePage from "../../components/AddExpensePage"

test('Should render add expense page correctly', () => {
    const onSubmit = jest.fn()
    const {asFragment} = render(
        <MemoryRouter>
            <AddExpensePage onSubmit={onSubmit}/>
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})

/*
test('Should handle onSubmit', () => {
    const onSubmit = jest.fn()
    render(
        <MemoryRouter>
            <AddExpensePage onSubmit={onSubmit}/>
        </MemoryRouter>
    )
    const expenseForm = screen.getByTestId('expense-form')
})
*/