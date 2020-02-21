import React from 'react';
import Card from './components/card'
import Header from './components/header'
import {createStore, applyMiddleware} from 'redux'
import {cardReducer as reducer} from './reducers/cardReducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './App.css';


const store = createStore(reducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
      <Card/>
    </div>
    </Provider>
  );
}

export default App;
