import React from "react"
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import { MemoryRouter } from 'react-router-dom'
import {render} from '../../../test-utils'

test('Should render Expense Dashboard page correctly', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <ExpenseDashboardPage />
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})