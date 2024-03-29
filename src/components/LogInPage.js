import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

const LogInPage = (props) => (
    <div>
        <button onClick={props.startLogin}>Log In</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LogInPage)