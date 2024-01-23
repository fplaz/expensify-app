import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux"

const PublicRouteWrapper = (props) => {
    console.log(props.isAuthenticated)
    return (props.isAuthenticated? <Navigate to="/dashboard"/> : <div>{props.Component}</div>)
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: Boolean(state.auth.uid)
    }
}

export default connect(mapStateToProps)(PublicRouteWrapper) 