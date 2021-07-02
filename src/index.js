import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/LoginForm';
import MainForm from './components/MainForm';
import { compose, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

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