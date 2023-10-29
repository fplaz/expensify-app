import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" className={({isActive}) => isActive ? "is-active" : undefined }>Home</NavLink>
        <NavLink to="/create" className={({isActive}) => isActive ? "is-active" : undefined }>Create expense</NavLink>
        <NavLink to="/help" className={({isActive}) => isActive ? "is-active" : undefined }>Help expense</NavLink>
    </header>
)

export default Header