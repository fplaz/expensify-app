import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import Header from "../components/Header"

const PrivateRouteWrapper = (props) => {
    console.log(props.isAuthenticated)
    return (props.isAuthenticated? <div><Header />{props.Component}</div> : <Navigate to="/login"/>)
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: Boolean(state.auth.uid)
    }
}

export default connect(mapStateToProps)(PrivateRouteWrapper)