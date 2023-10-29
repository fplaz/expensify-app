import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

const reducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
})

export default () => {
  const store = configureStore(
    {reducer},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
