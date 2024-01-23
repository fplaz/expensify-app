import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {startSetExpenses} from './actions/expenses'
import { auth } from './firebase/firebase'
import {login, logout} from './actions/auth'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()
let hasRendered = false

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

const renderApp = () => {
    if (!hasRendered) {
      ReactDOM.render(app, document.getElementById('app'))
      hasRendered = true
    }
  }

auth.onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        console.log('login')
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
        })
    } else {
        store.dispatch(logout())
        console.log('logout')
        renderApp()
    }
})