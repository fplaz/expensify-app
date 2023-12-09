import { combineReducers, applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = configureStore(
    {reducer},
    composeEnhancers(applyMiddleware)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
