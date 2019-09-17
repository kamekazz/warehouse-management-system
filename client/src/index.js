import React from 'react';
import ReactDOM from 'react-dom';
import './index';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

import { BrowserRouter, Router } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { styleColor } from './Styles/styleThem';
import App from './App';
import GlobalStyle from './Styles/global.styles';
import history from './redux/history';
import MessageBar from './components/MessugeBar';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: styleColor.primary.main },
    secondary: { main: styleColor.secondary.main },
    error: { main: styleColor.error.main }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Router history={history}>
          <App />
        </Router>
        <MessageBar />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
