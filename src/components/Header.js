import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = (props) => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" className={({isActive}) => isActive ? "is-active" : undefined }>Home</NavLink>
        <NavLink to="/create" className={({isActive}) => isActive ? "is-active" : undefined }>Create expense</NavLink>
        <NavLink to="/help" className={({isActive}) => isActive ? "is-active" : undefined }>Help expense</NavLink>
        <button onClick={props.startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)