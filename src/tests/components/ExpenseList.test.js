import React from "react"
import { ExpenseList } from '../../components/ExpenseList'
import { MemoryRouter } from 'react-router-dom'
import expenses from "../fixtures/expenses"
import {render} from '../../../test-utils'

test('Should render ExpenseList without expenses', () => {
    const {asFragment} = render(
        <ExpenseList expenses={[]} />
    )
    expect(asFragment()).toMatchSnapshot()
})

test('Should render ExpenseList with expenses', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <ExpenseList expenses={expenses} />
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})