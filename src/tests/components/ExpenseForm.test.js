import React from "react"
import { MemoryRouter } from 'react-router-dom'
import {render, screen, fireEvent} from '../../../test-utils'
import '@testing-library/jest-dom'
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expenses"

test('Should render expense form correctly', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <ExpenseForm />
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})

test('Should render expense form with data correctly', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <ExpenseForm expense={expenses[1]} />
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})

test('Should render error for invalid form submission', async () => {
    render(
        <MemoryRouter>
            <ExpenseForm />
        </MemoryRouter>
    )
    const submitButton = screen.getByText('Add Expense')
    fireEvent.click(submitButton)

    const errorMessage = screen.getByText('Please provide description and amount.')
    expect(errorMessage).toBeInTheDocument()
})

test('Should set description on input change', () => {
    render(
        <MemoryRouter>
            <ExpenseForm />
        </MemoryRouter>
    )

    const descriptionInput = screen.getByPlaceholderText("Description")
    fireEvent.change(descriptionInput, { target: { value: 'New Description' } })
    expect(screen.getByDisplayValue('New Description')).toBeInTheDocument()
})

test('Should call onSubmit prop for valid from submission', () => {
    const onSubmitSpy = jest.fn()
    render(
        <MemoryRouter>
            <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>
        </MemoryRouter>
    )
    const submitButton = screen.getByText('Add Expense')
    fireEvent.click(submitButton)

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt.valueOf(),
    })
})