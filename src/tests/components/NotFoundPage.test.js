import React from "react"
import NotFoundPage from "../../components/NotFoundPage"
import { MemoryRouter } from "react-router-dom"
import {render} from '@testing-library/react'

test('Should render NotFoundPage correctly', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <NotFoundPage />
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})