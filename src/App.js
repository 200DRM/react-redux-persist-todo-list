import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { 
  persistReducer,
  persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import Main from './components/Main';

import taskReducer from './reducers/taskReducer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  
  const persistConfig = {
    key : 'root',
    storage
  };

  const persistedReducer = persistReducer(persistConfig, taskReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Main />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
