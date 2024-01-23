import React from 'react'
import {Routes, Route, BrowserRouter, Redirect} from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import LogInPage from '../components/LogInPage'
import PrivateRouteWrapper from './PrivateRouteWrapper'
import PublicRouteWrapper from './PublicRouteWrapper'
// import { auth } from '../firebase/firebase'
// import {login, logout} from '../actions/auth'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path='/' element={<PrivateRouteWrapper Component={<ExpenseDashboardPage />} />} />
                <Route path='/login' element={<PublicRouteWrapper Component={<LogInPage />} />} />
                <Route path='/dashboard' element={<PrivateRouteWrapper Component={<ExpenseDashboardPage />} />} />
                <Route path='/create' element={<PrivateRouteWrapper Component={<AddExpensePage />} />} />
                <Route path='/edit/:id' element={<PrivateRouteWrapper Component={<EditExpensePage />} />} />
                <Route path='/help' element={<PrivateRouteWrapper Component={<HelpPage />} />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    </BrowserRouter>
)

export default AppRouter