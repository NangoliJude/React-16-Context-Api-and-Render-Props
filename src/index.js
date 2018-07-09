import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ErrorBoundry from './ErrorBoundry';
import { theme } from './components/UI'
import App from './App';




ReactDOM.render(
<BrowserRouter>
      <ErrorBoundry>
              <ThemeProvider theme={theme}>
                   <App/>
              </ThemeProvider>
      </ErrorBoundry>
</BrowserRouter>, document.getElementById('root'))