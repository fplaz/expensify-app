import React from 'react'
import { render as rtlRender} from '@testing-library/react'
import configureStore from './src/store/configureStore' 
import { Provider } from 'react-redux'

function render(
    ui,
    {
      initialState = {},
      store = configureStore,
      ...renderOptions
    } = {}
  ) {
    const Wrapper = ({ children }) => {
      return <Provider store={store()}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
  }
  
  // re-export everything
  export * from '@testing-library/react';
  
  // override render method
  export { render };