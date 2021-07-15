import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import MainForm from './components/MainForm';
import { compose, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userReducer from "./redux/userReducer"
import { api } from './api';

/*
const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
*/

const store = configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

const DummyApp = (props) => {  
  if (!props.isAuth) return (<LoginForm />);
  else return <MainForm />;
}

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth,
  };
}

const App = connect(mapStateToProps, null)(DummyApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);