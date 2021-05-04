import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/Main';

import taskReducer from './reducers/taskReducer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  const store = createStore(taskReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
