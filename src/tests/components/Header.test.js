import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import {render} from '@testing-library/react'
import Header from '../../components/Header'
//import ReactShallowRenderer from 'react-test-renderer/shallow'

test('Should render Header correctly', () => {
    const {asFragment} = render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
    
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})